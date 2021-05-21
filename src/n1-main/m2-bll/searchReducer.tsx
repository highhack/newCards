import {Dispatch} from "redux";
import {searchAPI} from "../m3-dal/auth-api";
import {setAppStatusAC, setErrorTextLoggedInAC} from "./loginReducer";
import {setPacksAC} from "./packReducer";


type InitialStateType = {
    packName: string
    min: number
    max: number
}

const initialState: InitialStateType = {
    packName: "",
    min: 0,
    max: 10,
}


export const searchReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SEARCH-PACK-NAME":
        case "SEARCH-CARDS-MIN-MAX":
        case "SEARCH-CARDS-MAX":
            return {...state};


        default:
            return state
    }
}

export const searchPackNameAC = (packName: string) => ({type: "SEARCH-PACK-NAME", packName} as const);
export const searchCardsMinAC = (min: number) => ({type: "SEARCH-CARDS-MIN-MAX", min} as const);
export const searchCardsMaxAC = (max: number) => ({type: "SEARCH-CARDS-MAX", max} as const);

export const searchTC = (packName: string, min: number, max: number) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading..."));
    try {
        let respons: any = await searchAPI.search(packName, min, max);
        dispatch(setPacksAC(respons.data.cardPacks));
    } catch (error) {
        dispatch(setErrorTextLoggedInAC(error.response.data.error));
    }
    dispatch(setAppStatusAC("idle"));
}

//эта санка нужна, если фильтр делать со второй кнопкой
// export const searchMinMaxTC = (min: number, max: number) => async (dispatch: Dispatch) => {
//     dispatch(setAppStatusAC("loading..."));
//     try {
//        let respons = await searchAPI.searchMinMax(min, max);
//         dispatch(setPacksAC(respons.data.cardPacks));
//     } catch (error) {
//         dispatch(setErrorTextLoggedInAC(error.response.data.error));
//     }
//     dispatch(setAppStatusAC("idle"));
// }

// types
type searchPackNameACType = ReturnType<typeof searchPackNameAC> |
    ReturnType<typeof searchCardsMinAC> |
    ReturnType<typeof searchCardsMaxAC>


type ActionsType = searchPackNameACType