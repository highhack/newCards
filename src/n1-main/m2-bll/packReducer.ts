import {Dispatch} from 'redux'
import {Api} from "../m3-dal/api";

type InitialStateType = {
    cardPacks: any
    newPackTitle: null | string
    id: string
}
const initialState: InitialStateType = {
    cardPacks: [],
    newPackTitle: null,
    id: ''
}

export const packReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-PACKS':
            return {...state, cardPacks: action.cardPacks}
        case 'ADD-PACK':
            return {...state, newPackTitle: action.newPackTitle}
        case 'DELETE-PACK':
            let a = state.cardPacks.filter((p: any) => p._id !== action.id)
            debugger
            return a
        default:
            return state
    }
}

// actions
export const setPacksAC = (cardPacks: string) => ({type: 'SET-PACKS', cardPacks} as const)
export const addPackAC = (newPackTitle: string) => ({type: 'ADD-PACK', newPackTitle} as const)
export const deletePackAC = (id: string) => ({type: 'DELETE-PACK', id} as const)


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
            .then((data) => {
                Api.getPacks()
                    .then((data: any) => {
                        dispatch(setPacksAC(data.cardPacks))
                    })
            })
    }
}
export const deletePackTC = (id: string) => {
    return (dispatch: ThunkDispatch) => {
        Api.deletePack(id)
            .then((data) => {
                Api.getPacks()
                    .then((data: any) => {
                        dispatch(setPacksAC(data.cardPacks))
                    })
            })
    }
}

// types
export type setPacksACType = ReturnType<typeof setPacksAC>;
export type addPackACType = ReturnType<typeof addPackAC>;
export type deletePackACType = ReturnType<typeof deletePackAC>;
type ActionsType =
    | setPacksACType
    | addPackACType
    | deletePackACType

type ThunkDispatch = Dispatch<ActionsType>