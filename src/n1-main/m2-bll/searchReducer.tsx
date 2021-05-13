import { Dispatch } from "redux";
import { searchAPI } from "../m3-dal/auth-api";
import { setAppStatusAC, setErrorTextLoggedInAC } from "./loginReducer";
import { setPacksAC } from "./packReducer";


type InitialStateType = {
    packName: string
    min: number
    max: number
    sortPacks: number
    page: number
    pageCount: number
    user_id: string
}

const initialState: InitialStateType = {
    packName: "",
    min: 1,
    max: 10,
    sortPacks: 0,
    page: 1,
    pageCount: 1,
    user_id: "5eb543f6bea3ad21480f1ee7"
}


export const searchReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SEARCH-PACK-NAME":
            return {...state,

                // packName: state.packName.filter((word: string) => {
                //     return word == action.packName ? word : "no results were found for your search"
                // })
            };

        default:
            return state
    }
}

const searchPackNameAC = (packName: string) => ({type: "SEARCH-PACK-NAME", packName} as const);

export const searchTC = (packName: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading..."));
    try {
       let a: any =  await searchAPI.search(packName);
        dispatch(setPacksAC(a.data.cardPacks));
    } catch (error) {
        dispatch(setErrorTextLoggedInAC(error.response.data.error));

    }
    dispatch(setAppStatusAC("idle"));
}

// types
type searchPackNameACType = ReturnType<typeof searchPackNameAC>
type ActionsType = searchPackNameACType