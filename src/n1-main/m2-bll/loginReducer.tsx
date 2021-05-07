import {Dispatch} from "redux"
import {authAPI} from "../m3-dal/auth-api";
import {LoadingStatusType} from "./registerReducer";

// types
type InitialStateType = {
    email: string
    password: string
    isLoggedIn: boolean
    rememberMe: boolean
    errorText: null | string
    loadingStatus: RequestStatusType
}

type ActionsType = ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setErrorTextLoggedInAC>
    | ReturnType<typeof changCheckboxLoggedInAC>
    | ReturnType<typeof setAppStatusAC>

export type RequestStatusType = 'idle' | 'loading...' | 'succeeded' | 'failed' | "";


const initialState = {
    email: "nya-admin@nya.nya",
    password: "1qazxcvBG",
    isLoggedIn: false,
    rememberMe: false,
    errorText: null,
    loadingStatus: "idle"
} as InitialStateType


export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value};
        case "login/SET-ERROR-TEXT-LOGGED-IN":
            return {...state, errorText: action.errorText};
        case "login/CHANG-CHECKBOX-LOGGED-IN":
            return {...state, rememberMe: action.rememberMe};
        case "APP/SET-STATUS":
            return {...state, loadingStatus: action.loadingStatus};
        default:
            return state
    }
}


// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: "login/SET-IS-LOGGED-IN", value} as const);
export const setErrorTextLoggedInAC = (errorText: null | string) =>
    ({type: "login/SET-ERROR-TEXT-LOGGED-IN", errorText} as const);
export const changCheckboxLoggedInAC = (rememberMe: boolean) =>
    ({type: "login/CHANG-CHECKBOX-LOGGED-IN", rememberMe} as const);
export const setAppStatusAC = (loadingStatus: RequestStatusType) =>
    ({type: 'APP/SET-STATUS', loadingStatus} as const)


// thunks
export const loginTC = (email: string, password: string, rememberMe?: boolean) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC("loading..."))

    try {

        const response = await authAPI.login(email, password, rememberMe);
        if (response.data.password) {
            dispatch(setIsLoggedInAC(true));
            dispatch(changCheckboxLoggedInAC(true))

        }
        dispatch(setAppStatusAC("idle"))
    } catch (error) {
        // throw new Error(`Unable to get currency ${error}`);
        dispatch(setErrorTextLoggedInAC(error.response.data.error))

    }
    dispatch(setAppStatusAC("idle"))
}




