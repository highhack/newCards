import {Dispatch} from 'redux'
import {Api} from "../m3-dal/api";

type InitialStateType = {
    cards: any
    newCardsTitle: null | string
    id: string
}
const initialState: InitialStateType = {
    cards: [],
    newCardsTitle: null,
    id: ''
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-CARDS':
            return {...state, cards: action.cards}
        // case 'ADD-CARD':
        //     return {...state, newCardsTitle: action.newCardsTitle}
        // case 'DELETE-CARD':
        //     return state.cards.filter((p: any) => p._id !== action.id)
        default:
            return state
    }
}

// actions
export const setCardsAC = (cards: Array<any>) => ({type: 'SET-CARDS', cards} as const)
export const addCardAC = (newCardTitle: string) => ({type: 'ADD-CARD', newCardTitle} as const)
export const deleteCardAC = (id: string) => ({type: 'DELETE-CARD', id} as const)


// thunks
export const getCardsTC = (packId: string) => {
    return (dispatch: ThunkDispatch) => {
        Api.getCards(packId)
            .then((data: any) => {
                dispatch(setCardsAC(data.cards))
            })
    }
}
export const addCardTC = (question: string, answer: string) => {
    return (dispatch: ThunkDispatch) => {
        Api.postNewCard(question, answer)
            // .then((data) => {
            //     Api.getCards()
            //         .then((data: any) => {
            //             dispatch(setCardsAC(data.card))
            //         })
            // })
    }
}
// export const deleteCardsTC = (id: string) => {
//     return (dispatch: ThunkDispatch) => {
//         Api.deleteCard(id)
//             .then((data) => {
//                 Api.getCards()
//                     .then((data: any) => {
//                         dispatch(setCardsAC(data.cardPacks))
//                     })
//             })
//     }
// }

// types
export type setCardsACType = ReturnType<typeof setCardsAC>;
export type addCardACType = ReturnType<typeof addCardAC>;
export type deleteCardACType = ReturnType<typeof deleteCardAC>;
type ActionsType =
    | setCardsACType
    // | addCardACType
    // | deleteCardACType

type ThunkDispatch = Dispatch<ActionsType>