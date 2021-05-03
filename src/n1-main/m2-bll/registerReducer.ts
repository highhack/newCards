import {Api} from "../m3-dal/api";
import {Dispatch} from "redux";


type InitialStateType = {
    mail: string
    password: string
    checkPassword: string
    errorText: null | string
    addedUser: boolean
}


const initialState = {
    mail: '',
    password: '',
    checkPassword: '',
    errorText: null,
    addedUser: false
}

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


// thunks

export const SendRegisterTC = (mail: string, password: string) => (dispatch: Dispatch<ActionsType>) => {
    Api.postDataRegister(mail, password)
        // .then((res) => {
        //     debugger
        //     return res.data
        // })
        .then((res) => {
            if (res.addedUser !== undefined) {
                dispatch(setAddedUserAC())
                // return res.data.addedUser
            }
        })
        .catch(error => dispatch(setErrorTextAC(error.response.data.error)))
}


// types
export type setMailACType = ReturnType<typeof setMailAC>;
export type setCheckPasswordACType = ReturnType<typeof setCheckPasswordAC>;
export type setPasswordACType = ReturnType<typeof setPasswordAC>;
export type setErrorTextACType = ReturnType<typeof setErrorTextAC>;
export type setAddedUserACType = ReturnType<typeof setAddedUserAC>;
type ActionsType =
    | setMailACType
    | setCheckPasswordACType
    | setPasswordACType
    | setErrorTextACType
    | setAddedUserACType

// type ThunkDispatch = Dispatch<ActionsType>