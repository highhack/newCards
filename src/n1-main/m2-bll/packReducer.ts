import {Dispatch} from 'redux'
import {Api} from "../m3-dal/api";

const initialState: any = {}

export const packReducer = (state: any = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'SET-PACKS':
            return {...state, cardPacks: action.cardPacks}
        case 'ADD-PACK':
            return {...state, newPackTitle: action.newPackTitle}
        default:
            return state
    }
}

// actions
export const setPacksAC = (cardPacks: string) => ({type: 'SET-PACKS', cardPacks} as const)
export const addPackAC = (newPackTitle: string) => ({type: 'ADD-PACK', newPackTitle} as const)


// thunks
export const getPacksTC = () => {
    return (dispatch: ThunkDispatch) => {
        Api.getPacks()
            .then((data: any) => {
                dispatch(setPacksAC(data.cardPacks))
            })
    }
}
export const addPackTC = (title: string) => {
    return (dispatch: ThunkDispatch) => {
        Api.postNewPack(title)
            .then((data: any) => {
                dispatch(setPacksAC(data.cardPacks))
            })
    }
}

// types
export type setPacksACType = ReturnType<typeof setPacksAC>;
export type addPackACType = ReturnType<typeof addPackAC>;
type ActionsType =
    | setPacksACType
    | addPackACType

type ThunkDispatch = Dispatch<ActionsType>