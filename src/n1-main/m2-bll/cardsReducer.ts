import {Dispatch} from 'redux'
import {Api, CardType} from "../m3-dal/api";


type InitialStateType = {
    cards: Array<CardType>
    packId: string
    cardId: string

}
const initialState: InitialStateType = {
    cards: [],
    packId: '',
    cardId:''
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-CARDS':
            return {...state, cards: action.cards, packId: action.packId}
        case 'SET-CARD-ID':
            let a =  {...state, cardId: action.cardId}
            return a
        // case 'ADD-CARD':
        //     return {...state, newCardsTitle: action.newCardsTitle}
        // case 'DELETE-CARD':
        //     return state.cards.filter((p: any) => p._id !== action.id)
        default:
            return state
    }
}

// actions
export const setCardsAC = (cards: Array<any>, packId: string) => ({type: 'SET-CARDS', cards, packId} as const)
export const deleteCardAC = (id: string) => ({type: 'DELETE-CARD', id} as const)
export const setCardIdAC = (cardId: string) => ({type: 'SET-CARD-ID', cardId} as const)


// thunks
export const getCardsTC = (packId: string) => {
    return (dispatch: ThunkDispatch) => {
        Api.getCards(packId)
            .then((data) => {
               return dispatch(setCardsAC(data.cards,packId ))
            })
    }
}
export const addCardTC = (question: string, answer: string, packId: string) => {
    return (dispatch: ThunkDispatch) => {
        Api.postNewCard(question, answer, packId)
            .then((data) => {
                Api.getCards(packId)
                    .then((data) => {
                        dispatch(setCardsAC(data.cards, packId))
                    })
            })
    }
}
export const deleteCardsTC = (id: string, packId: string) => {
    return (dispatch: ThunkDispatch) => {
        Api.deleteCard(id)
            .then((data) => {
                Api.getCards(packId)
                    .then((data: any) => {
                        dispatch(setCardsAC(data.cards, packId))
                    })
            })
    }
}

export const updateCardTitleTC = (quesrion: string,answer: string, cardId: string, packId: string) => {
    return (dispatch: ThunkDispatch) => {
        Api.updateCard(quesrion,answer, cardId)
            .then((data) => {
                Api.getCards(packId)
                    .then((data: any) => {
                        dispatch(setCardsAC(data.cards, packId))
                    })
            })
    }
}


// types
export type setCardsACType = ReturnType<typeof setCardsAC>;
export type deleteCardACType = ReturnType<typeof deleteCardAC>;
export type setCardIdACType = ReturnType<typeof setCardIdAC>;
type ActionsType =
    | setCardsACType
    | setCardIdACType
    // | deleteCardACType

type ThunkDispatch = Dispatch<ActionsType>