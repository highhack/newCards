
import {setIsLoggedInAC} from "./loginReducer";
import {Api} from "../m3-dal/api";
import {Dispatch} from "redux";
import {setLoadingStatusAC} from "./registerReducer";

export type InitialStateType = {
    error: string | null
    isInitialized: boolean
    myId: string
}

const initialState: InitialStateType = {
    // status: 'idle',
    error: null,
    isInitialized: false,
    myId: ''
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        // case 'APP/SET-STATUS':
        //     return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'SET-IS-INITIALIZED':
           return {...state, isInitialized: action.isInitialized }
           case 'SET-MY-ID':
           let a =  {...state, myId: action.myId }
           return a
        default:
            return {...state}
    }
}

export const initializeAppTC = () => (dispatch: Dispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.me().then(res => {
        dispatch(setMyIdAC(res._id))
        dispatch(setAppInitializedAC(true))
            dispatch(setIsLoggedInAC(true));
        dispatch(setLoadingStatusAC('succeeded'))
    })
        .catch(error => {
            dispatch(setAppErrorAC(error.response.data.error))
            dispatch(setAppInitializedAC(false))
            dispatch(setLoadingStatusAC('failed'))
            dispatch(setIsLoggedInAC(false))
        })
        // .finally(() => {
        //     dispatch(setLoadingStatusAC('succeeded'))
        // })
}

export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)
// export const setAppStatusAC = (status:  RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)
export const setAppInitializedAC = (isInitialized:  boolean) => ({ type: 'SET-IS-INITIALIZED', isInitialized } as const)
export const setMyIdAC = (myId: string) => ({ type: 'SET-MY-ID', myId } as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
// export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type setAppInitializedType = ReturnType<typeof setAppInitializedAC>
export type setMyIdACType = ReturnType<typeof setMyIdAC>

type ActionsType =
    | SetAppErrorActionType
    // | SetAppStatusActionType
    | setAppInitializedType
    | setMyIdACType