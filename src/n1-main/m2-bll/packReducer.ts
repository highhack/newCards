import {Dispatch} from 'redux'
import {Api} from "../m3-dal/api";
import {setErrorTextAC, setErrorTextACType, setLoadingStatusAC, setLoadingStatusACType} from "./registerReducer";
import {searchAPI} from "../m3-dal/auth-api";

type InitialStateType = {
    cardPacks: any
    newPackTitle: null | string
    id: string
    packId: string
    cardPacksTotalCount: number
    pageCount?: number
    page?: number
    portionSize: number
    searchStatus: 'allPacks' | 'myPacks'
}
const initialState: InitialStateType = {
    cardPacks: [],
    newPackTitle: null,
    id: '',
    packId: '',
    cardPacksTotalCount: 140,
    pageCount: 10,
    page: 1,
    portionSize: 5,
    searchStatus: 'allPacks'
}

export const packReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-PACKS':
            return {...state, cardPacks: action.cardPacks}
        case 'ADD-PACK':
            return {...state, newPackTitle: action.newPackTitle}
        case 'DELETE-PACK':
            return state.cardPacks.filter((p: any) => p._id !== action.id)
        case 'SET-PACK-ID':
            return {...state, packId: action.packId}
        case "SET_CURRENT_PAGE":
            return {...state, page: action.page}
        case "SET_TOTAL_COUNT":
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}
        case "SET-SEARCH-STATUS":
            return {...state, searchStatus: action.searchStatus}
        default:
            return state
    }
}

// actions
export const setPacksAC = (cardPacks: Array<any>) => ({type: 'SET-PACKS', cardPacks} as const)
export const addPackAC = (newPackTitle: string) => ({type: 'ADD-PACK', newPackTitle} as const)
export const deletePackAC = (id: string) => ({type: 'DELETE-PACK', id} as const)
export const setPackIdAC = (packId: string) => ({type: 'SET-PACK-ID', packId} as const)
export const setSearchStatusAC = (searchStatus: string) => ({type: 'SET-SEARCH-STATUS', searchStatus} as const)

//actions Paginator
export const setCurrentPage = (page: number) => ({type: "SET_CURRENT_PAGE", page} as const)
export const setCardPacksTotalCount = (cardPacksTotalCount: number) => ({
    type: "SET_TOTAL_COUNT",
    cardPacksTotalCount: cardPacksTotalCount
} as const)


// thunks
export const getPacksTC = (page: number) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.getPacks(page)
        .then((data) => {
            dispatch(setPacksAC(data.cardPacks))
            dispatch(setCurrentPage(data.page))
            dispatch(setLoadingStatusAC('succeeded'))
        })

}
export const addPackTC = (title: string, page: number) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.postNewPack(title)
        .then((data) => {
            Api.getPacks(page)
                .then((data) => {
                    dispatch(setPacksAC(data.cardPacks))
                    dispatch(setLoadingStatusAC('succeeded'))
                })
        })
        .catch((error) => {
            error.response.data.error && dispatch(setErrorTextAC("error"))
            dispatch(setLoadingStatusAC('failed'))
        })
}

export const deletePackTC = (id: string, page: number) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.deletePack(id)
        .then((data) => {
            Api.getPacks(page)
                .then((data) => {
                    dispatch(setPacksAC(data.cardPacks))
                    dispatch(setLoadingStatusAC('succeeded'))
                })
        })
        .catch((error) => {
            error.response.data.error && dispatch(setErrorTextAC("You can't delete not your Pack"))
            dispatch(setLoadingStatusAC('failed'))
        })
}


export const updatePackTitleTC = (newPackName: string, packId: string, page: number) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.updatePack(newPackName, packId)
        .then((data) => {
            Api.getPacks(page)
                .then((data) => {
                    dispatch(setPacksAC(data.cardPacks))
                    dispatch(setLoadingStatusAC('succeeded'))
                })
        })
        .catch((error) => {
            error.response.data.error && dispatch(setErrorTextAC("You can't update not your Pack"))
            dispatch(setLoadingStatusAC('failed'))
        })
}


export const searchAllPacksTC = (packName: string) => async (dispatch: Dispatch) => {
    dispatch(setLoadingStatusAC("loading"))
    try {
        let a: any = await searchAPI.search(packName);
        dispatch(setPacksAC(a.data.cardPacks));
        dispatch(setLoadingStatusAC("succeeded"))
    } catch (error) {
        dispatch(setErrorTextAC(error.response.data.error));
        dispatch(setLoadingStatusAC("failed"))
    }
}
export const searchMyPacksTC = (myId: string) => async (dispatch: Dispatch) => {
    dispatch(setLoadingStatusAC("loading"))
    try {
        debugger
        let a: any = await searchAPI.searchPacksUserId(myId);
        dispatch(setPacksAC(a.cardPacks));
        dispatch(setLoadingStatusAC("succeeded"))
    } catch (error) {
        debugger
        // dispatch(setErrorTextAC(error.response.data.error));
        dispatch(setLoadingStatusAC("failed"))
    }
}

// types
export type setPacksACType = ReturnType<typeof setPacksAC>;
export type addPackACType = ReturnType<typeof addPackAC>;
export type deletePackACType = ReturnType<typeof deletePackAC>;
export type SetPackIdACType = ReturnType<typeof setPackIdAC>;
export type setCurrentPageType = ReturnType<typeof setCurrentPage>;
export type setCardPacksTotalCountType = ReturnType<typeof setCardPacksTotalCount>;
export type setSearchStatusACType = ReturnType<typeof setSearchStatusAC>;

type ActionsType =
    | setPacksACType
    | addPackACType
    | deletePackACType
    | SetPackIdACType
    | setCurrentPageType
    | setCardPacksTotalCountType
    | setLoadingStatusACType
    | setErrorTextACType
    | setSearchStatusACType

type ThunkDispatch = Dispatch<ActionsType>