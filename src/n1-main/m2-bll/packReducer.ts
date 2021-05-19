import {Dispatch} from 'redux'
import {Api} from "../m3-dal/api";

type InitialStateType = {
    cardPacks: any
    newPackTitle: null | string
    id: string
    cardPacksTotalCount: number
    pageCount?: number
    page?: number

}
const initialState: InitialStateType = {
    cardPacks: [],
    newPackTitle: null,
    id: '',
    cardPacksTotalCount: 14,
    pageCount: 4,
    page: 1
}

export const packReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-PACKS':
            return {...state, cardPacks: action.cardPacks}
        case 'ADD-PACK':
            return {...state, newPackTitle: action.newPackTitle}
        case 'DELETE-PACK':
            return state.cardPacks.filter((p: any) => p._id !== action.id)
        case "SET_CURRENT_PAGE":
            return {...state, page: action.page}
        case "SET_TOTAL_COUNT":
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}
        default:
            return state
    }
}

// actions
export const setPacksAC = (cardPacks: Array<any>) => ({type: 'SET-PACKS', cardPacks} as const)
export const addPackAC = (newPackTitle: string) => ({type: 'ADD-PACK', newPackTitle} as const)
export const deletePackAC = (id: string) => ({type: 'DELETE-PACK', id} as const)

//actions Paginator
export const setCurrentPage = (page: number) => ({type: "SET_CURRENT_PAGE", page} as const)
export const setCardPacksTotalCount = (cardPacksTotalCount: number) => ({
    type: "SET_TOTAL_COUNT",
    cardPacksTotalCount: cardPacksTotalCount
} as const)


// thunks
export const getPacksTC = (pageCount: number, page: number) => {
    return (dispatch: ThunkDispatch) => {
        Api.getPacks(pageCount, page)
            .then((data: any) => {
                dispatch(setPacksAC(data.cardPacks))
                dispatch(setCurrentPage(data.page))
            })
    }
}
export const addPackTC = (title: string, pageCount: number, page: number) => {
    return (dispatch: ThunkDispatch) => {
        Api.postNewPack(title)
            .then((data) => {
                Api.getPacks(pageCount, page)
                    .then((data: any) => {
                        dispatch(setPacksAC(data.cardPacks))
                    })
            })
    }
}
export const deletePackTC = (id: string, pageCount: number, page: number) => {
    return (dispatch: ThunkDispatch) => {
        Api.deletePack(id)
            .then((data) => {
                Api.getPacks(pageCount, page)
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
export type setCurrentPageType = ReturnType<typeof setCurrentPage>;
export type setCardPacksTotalCountType = ReturnType<typeof setCardPacksTotalCount>;

type ActionsType =
    | setPacksACType
    | addPackACType
    | deletePackACType
    | setCurrentPageType
    | setCardPacksTotalCountType

type ThunkDispatch = Dispatch<ActionsType>