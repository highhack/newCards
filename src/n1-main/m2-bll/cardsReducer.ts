import {Dispatch} from 'redux'
import {Api, CardType} from "../m3-dal/api";
import {setLoadingStatusAC, setLoadingStatusACType} from "./registerReducer";


type InitialStateType = {
    cards: Array<CardType>
    packId: string
    cardId: string

}
const initialState: InitialStateType = {
    cards: [],
    packId: '',
    cardId: ''
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-CARDS':
            return {...state, cards: action.cards, packId: action.packId}
        case 'SET-CARD-ID':
            return {...state, cardId: action.cardId}
        default:
            return state
    }
}

// actions
export const setCardsAC = (cards: Array<any>, packId: string) => ({type: 'SET-CARDS', cards, packId} as const)
export const deleteCardAC = (id: string) => ({type: 'DELETE-CARD', id} as const)
export const setCardIdAC = (cardId: string) => ({type: 'SET-CARD-ID', cardId} as const)


// thunks
export const getCardsTC = (packId: string) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.getCards(packId)
        .then((data) => {
            dispatch(setCardsAC(data.cards, packId))
            dispatch(setLoadingStatusAC('succeeded'))
        })
}
export const addCardTC = (question: string, answer: string, packId: string) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.postNewCard(question, answer, packId)
        .then((data) => {
            Api.getCards(packId)
                .then((data) => {
                    dispatch(setCardsAC(data.cards, packId))
                    dispatch(setLoadingStatusAC('succeeded'))
                })
        })
}

export const deleteCardsTC = (id: string, packId: string) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingStatusAC('loading'))
    Api.deleteCard(id)
        .then((data) => {
            Api.getCards(packId)
                .then((data: any) => {
                    dispatch(setCardsAC(data.cards, packId))
                    dispatch(setLoadingStatusAC('succeeded'))
                })
        })
}

export const updateCardTitleTC = (quesrion: string, answer: string, cardId: string, packId: string) =>
    (dispatch: ThunkDispatch) => {
        dispatch(setLoadingStatusAC('loading'))
        Api.updateCard(quesrion, answer, cardId)
            .then((data) => {
                Api.getCards(packId)
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
type ActionsType =
    | setCardsACType
    | setCardIdACType
    | setLoadingStatusACType

type ThunkDispatch = Dispatch<ActionsType>