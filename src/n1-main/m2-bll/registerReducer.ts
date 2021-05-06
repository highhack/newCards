import {Api} from "../m3-dal/api";
import {Dispatch} from "redux";


type InitialStateType = {
    mail: string
    password: string
    checkPassword: string
    errorText: null | string
    addedUser: boolean
    loadingStatus: LoadingStatusType
}
export type LoadingStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const initialState = {
    mail: '',
    password: '',
    checkPassword: '',
    errorText: null,
    addedUser: false,
    loadingStatus: 'idle'
} as InitialStateType

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-MAIL':
            return {...state, mail: action.mail}
        case 'SET-CHECK-PASSWORD':
            return {...state, checkPassword: action.checkPassword}
        case 'SET-PASSWORD':
            return {...state, password: action.password}
        case 'SET-ERROR-TEXT':
            return {...state, errorText: action.errorText}
        case 'SET-ADDED-USER':
            return {...state, addedUser: true}
        case 'SET-LOADING-STATUS':
            return {...state, loadingStatus: action.loadingStatus}
        default:
            return state
    }
}

// actions
export const setMailAC = (mail: string) => ({type: 'SET-MAIL', mail} as const)
export const setCheckPasswordAC = (checkPassword: string) => ({type: 'SET-CHECK-PASSWORD', checkPassword} as const)
export const setPasswordAC = (password: string) => ({type: 'SET-PASSWORD', password} as const)
export const setErrorTextAC = (errorText: null | string) => ({type: 'SET-ERROR-TEXT', errorText} as const)
export const setAddedUserAC = () => ({type: 'SET-ADDED-USER'} as const)
export const setLoadingStatusAC = (loadingStatus: LoadingStatusType) => ({type: 'SET-LOADING-STATUS', loadingStatus} as const)


// thunks

export const SendRegisterTC = (mail: string, password: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoadingStatusAC("loading"))
    Api.postDataRegister(mail, password)
        .then((res) => {
            if (res.addedUser !== undefined) {
                dispatch(setAddedUserAC())
            }
            dispatch(setLoadingStatusAC('succeeded'))
        })
        .catch(error => {dispatch(setErrorTextAC(error.response.data.error))
            dispatch(setLoadingStatusAC('succeeded'))
            })
}


// types
export type setMailACType = ReturnType<typeof setMailAC>;
export type setCheckPasswordACType = ReturnType<typeof setCheckPasswordAC>;
export type setPasswordACType = ReturnType<typeof setPasswordAC>;
export type setErrorTextACType = ReturnType<typeof setErrorTextAC>;
export type setAddedUserACType = ReturnType<typeof setAddedUserAC>;
export type setLoadingStatusACType = ReturnType<typeof setLoadingStatusAC>;
type ActionsType =
    | setMailACType
    | setCheckPasswordACType
    | setPasswordACType
    | setErrorTextACType
    | setAddedUserACType
    | setLoadingStatusACType

// type ThunkDispatch = Dispatch<ActionsType>