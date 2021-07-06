import {Dispatch} from "redux"
import {authAPI} from "../m3-dal/auth-api";
import {initializeAppTC, setAppInitializedAC, setAppInitializedType} from "./appReducer";
import {setErrorTextAC, setErrorTextACType, setLoadingStatusAC, setLoadingStatusACType} from "./registerReducer";

// types
type InitialStateType = {
    email: string
    password: string
    isLoggedIn: boolean
    rememberMe: boolean
}

type ActionsType = ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof changCheckboxLoggedInAC>
    | ReturnType<typeof setAppInitializedAC>
    | setLoadingStatusACType
    | setErrorTextACType
    | setAppInitializedType



const initialState = {
    email: "GABA@gmail.com",
    password: "qaswq123",
    isLoggedIn: false,
    rememberMe: false,
    errorText: null,
    loadingStatus: "idle"
} as InitialStateType


export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value};
        case "login/CHANG-CHECKBOX-LOGGED-IN":
            return {...state, rememberMe: action.rememberMe};
        default:
            return state
    }
}


// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: "login/SET-IS-LOGGED-IN", value} as const);
export const changCheckboxLoggedInAC = (rememberMe: boolean) =>
    ({type: "login/CHANG-CHECKBOX-LOGGED-IN", rememberMe} as const);


// thunks
export const loginTC = (email: string, password: string, rememberMe?: boolean) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoadingStatusAC('loading'))
    try {
        await authAPI.login(email, password, rememberMe);
        dispatch(setIsLoggedInAC(true));
        dispatch(setAppInitializedAC(true))
        dispatch(setLoadingStatusAC('succeeded'))
    }
    catch (error) {
        await// error.response.data.error && dispatch(setErrorTextAC("Password or mail not correct"))
        dispatch(setLoadingStatusAC('failed'))
    }
};

export const logoutTC = (value: boolean) => async (dispatch: Dispatch<ActionsType>) => {

    dispatch(setLoadingStatusAC('loading'))

    try {
        await authAPI.logout();
        dispatch(setIsLoggedInAC(false));
        dispatch(setLoadingStatusAC('succeeded'))
    } catch (error) {
        dispatch(setErrorTextAC(error.response.data.error));
        dispatch(setAppInitializedAC(false))
        dispatch(setLoadingStatusAC('failed'))
    }
}




