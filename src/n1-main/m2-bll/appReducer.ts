
import {setIsLoggedInAC} from "./loginReducer";
import {Api} from "../m3-dal/api";
import {Dispatch} from "redux";

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'SET-IS-INITIALIZED':
            let a = {...state, isInitialized: action.isInitialized }
            return  a
        default:
            return {...state}
    }
}

export const initializeAppTC = () => (dispatch: Dispatch) => {
    Api.me().then(res => {
        // dispatch(setLoadingStatusAC('loading'))
        dispatch(setAppInitializedAC(true))
            dispatch(setIsLoggedInAC(true));
    })
        .catch(error => {
            // dispatch(setAppErrorAC(error.response.data.error))
            dispatch(setAppInitializedAC(false))
            // dispatch(setIsLoggedInAC(false))
        })
        // .finally(() => {
        //     dispatch(setLoadingStatusAC('succeeded'))
        // })
}

export type RequestStatusType =  'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    isInitialized: boolean
}

export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)
export const setAppStatusAC = (status:  RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)
export const setAppInitializedAC = (isInitialized:  boolean) => ({ type: 'SET-IS-INITIALIZED', isInitialized } as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type setAppInitializedType = ReturnType<typeof setAppInitializedAC>

type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | setAppInitializedType