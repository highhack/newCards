import {Dispatch} from 'redux'
import {Api, CardType} from "../m3-dal/api";
import {setLoadingStatusAC, setLoadingStatusACType} from "./registerReducer";
import {setCardPacksTotalCountAC, setCardPacksTotalCountType} from "./packReducer";


type InitialStateType = {
    cards: Array<CardType>
    packId: string
    cardId: string
    inCardsPage?: boolean
    currentCardsPage: number
}
const initialState: InitialStateType = {
    cards: [],
    packId: '',
    cardId: '',
    inCardsPage: false,
    currentCardsPage: 1
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-CARDS':
            let a = {...state, cards: action.cards, packId: action.packId}
            return a
        case 'SET-CARD-ID':
            return {...state, cardId: action.cardId}
        case 'SET-IN-CARDS-PAGE':
            return {...state, inCardsPage: action.inCardsPage}
        case 'SET-CURRENT-CARDS-PAGE':
            return {...state, currentCardsPage: action.currentCardsPage}
        default:
            return state
    }
}

// actions
export const setCardsAC = (cards: Array<any>, packId: string) => ({type: 'SET-CARDS', cards, packId} as const)
export const deleteCardAC = (id: string) => ({type: 'DELETE-CARD', id} as const)
export const setCardIdAC = (cardId: string) => ({type: 'SET-CARD-ID', cardId} as const)
export const setInCardsPageAC = (inCardsPage: boolean) => ({type: 'SET-IN-CARDS-PAGE', inCardsPage} as const)
export const SerCurrentCardsPageAC = (currentCardsPage: number) => ({
    type: 'SET-CURRENT-CARDS-PAGE',
    currentCardsPage
} as const)


// thunks
export const getCardsTC = (packId: string, currentPage: number | null) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.getCards(packId, currentPage)
        .then((data) => {
            dispatch(setCardPacksTotalCountAC(data.cardsTotalCount))
            dispatch(setCardsAC(data.cards, packId))
            dispatch(setLoadingStatusAC('succeeded'))
            return data.cards
        })
}
export const addCardTC = (question: string, answer: string, packId: string, currentPage: number | null) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.postNewCard(question, answer, packId)
        .then((data) => {
            Api.getCards(packId, currentPage)
                .then((data) => {
                    dispatch(setCardsAC(data.cards, packId))
                    dispatch(setLoadingStatusAC('succeeded'))
                })
        })
}

export const deleteCardsTC = (id: string, packId: string, currentPage: number | null) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.deleteCard(id)
        .then((data) => {
            Api.getCards(packId, currentPage)
                .then((data: any) => {
                    dispatch(setCardsAC(data.cards, packId))
                    dispatch(setLoadingStatusAC('succeeded'))
                })
        })
}

export const updateCardTitleTC = (quesrion: string, answer: string, cardId: string, packId: string, currentPage: number | null) =>
    (dispatch: ThunkDispatch) => {
        dispatch(setLoadingStatusAC('loading'))
        Api.updateCard(quesrion, answer, cardId)
            .then((data) => {
                Api.getCards(packId, currentPage)
                    .then((data: any) => {
                        dispatch(setCardsAC(data.cards, packId))
                        dispatch(setLoadingStatusAC('succeeded'))
                    })
            })
    }


// types
export type setCardsACType = ReturnType<typeof setCardsAC>;
export type deleteCardACType = ReturnType<typeof deleteCardAC>;
export type setCardIdACType = ReturnType<typeof setCardIdAC>;
export type setInCardsPageACType = ReturnType<typeof setInCardsPageAC>;
export type SerCurrentCardsPageACType = ReturnType<typeof SerCurrentCardsPageAC>;
type ActionsType =
    | setCardsACType
    | setCardIdACType
    | setLoadingStatusACType
    | setCardPacksTotalCountType
    | setInCardsPageACType
    | SerCurrentCardsPageACType

type ThunkDispatch = Dispatch<ActionsType>