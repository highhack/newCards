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
    learnWindowOpen: boolean
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
    searchStatus: 'allPacks',
    learnWindowOpen: false
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
            case "SET-LEARN-WINDOW-OPEN":
            return {...state, learnWindowOpen: action.learnWindowOpen}
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
export const setLearnWindowOpenAC = (learnWindowOpen: boolean) => ({type: "SET-LEARN-WINDOW-OPEN", learnWindowOpen} as const)

//actions Paginator
export const setCurrentPageAC = (page: number) => ({type: "SET_CURRENT_PAGE", page} as const)
export const setCardPacksTotalCountAC = (cardPacksTotalCount: number) => ({
    type: "SET_TOTAL_COUNT", cardPacksTotalCount} as const)


// thunks
export const getPacksTC = (page: number) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.getPacks(page)
        .then((data) => {
            dispatch(setCardPacksTotalCountAC(data.cardPacksTotalCount))
            dispatch(setPacksAC(data.cardPacks))
            dispatch(setCurrentPageAC(data.page))
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


export const searchPacksTC = (packName: string) => async (dispatch: Dispatch) => {
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
export const searchMyPacksTC = (page: number, myId: string) => async (dispatch: Dispatch) => {
    dispatch(setSearchStatusAC('myPacks'))
    dispatch(setLoadingStatusAC("loading"))
    try {
        let a: any = await searchAPI.searchPacksUserId(myId, page);
        dispatch(setPacksAC(a.cardPacks));
        dispatch(setLoadingStatusAC("succeeded"))
        // dispatch(setSearchStatusAC("myPacks"))
        dispatch(setCardPacksTotalCountAC(a.cardPacksTotalCount))
    } catch (error) {
        // dispatch(setErrorTextAC(error.response.data.error));
        dispatch(setLoadingStatusAC("failed"))
    }
}

// types
export type setPacksACType = ReturnType<typeof setPacksAC>;
export type addPackACType = ReturnType<typeof addPackAC>;
export type deletePackACType = ReturnType<typeof deletePackAC>;
export type SetPackIdACType = ReturnType<typeof setPackIdAC>;
export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>;
export type setCardPacksTotalCountType = ReturnType<typeof setCardPacksTotalCountAC>;
export type setSearchStatusACType = ReturnType<typeof setSearchStatusAC>;
export type setLearnWindowOpenACType = ReturnType<typeof setLearnWindowOpenAC>;

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
    | setLearnWindowOpenACType

type ThunkDispatch = Dispatch<ActionsType>