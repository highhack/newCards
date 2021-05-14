import {Dispatch} from 'redux'
import { cardAPI } from '../m3-dal/forgot-api'


const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: true,
    forgotPassword: false,
}

//Reducer
export const forgotReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'CARDS/FORGOT-PASSWOR':
            return {...state, forgotPassword: action.forgotPassword}
        case 'CARDS/SET-APP-STATUS':
            return {...state, status: action.status}
        case 'CARDS/SET-APP-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// actions
const forgotPasswordAC = (forgotPassword: boolean) => ({
    type: 'CARDS/FORGOT-PASSWOR',
    forgotPassword
} as const)

const setAppStatusAC = (status: RequestStatusType) => ({
    type: 'CARDS/SET-APP-STATUS',
    status
} as const)

const setAppErrorAC = (error: string | null) => ({
    type: 'CARDS/SET-APP-ERROR',
    error
} as const)


// thunks
export const forgotPasswordTC = (email: string) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setAppStatusAC('loading'))
        dispatch(forgotPasswordAC(true))
        cardAPI.forgotPassword(email)
            .then((res: any) => {
                dispatch(setAppStatusAC('succeeded'))
                dispatch(setAppErrorAC(null))
            }).catch(e => {
            const error = e.response?e.response.data.error:(e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))
            dispatch(setAppStatusAC('failed'))
        }).finally(()=>{
                dispatch(forgotPasswordAC(false))
            }
        )
    }
}


export const authMeTC =()=>(dispatch: ThunkDispatch)=>{
    cardAPI.authMe().then((res: any) => {
    }).catch(e => {
        const error = e.response?e.response.data.error:(e.message + ', more details in the console');
    }).finally(()=>{
        }
    )
}



// types
type ActionsType =
    | ReturnType<typeof forgotPasswordAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>

type ThunkDispatch = Dispatch<ActionsType>

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type InitialStateType = {
    // is there any interaction with the server now
    status: RequestStatusType
    // if a global error happen, we will write the error text here
    error: string | null
    // true when the application was initialized (checked the user, got the settings, etc.)
    isInitialized: boolean
    //  true if user forgot password
    forgotPassword: boolean
}

