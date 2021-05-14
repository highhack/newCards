import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {searchTC} from "../../../m2-bll/searchReducer";
// import { AppRootStateType } from "../../../m2-bll/store";
import {Button} from "../../common/Button/Button";
import s from './searchPack.module.css'

// type SearchPackType = {
//     cardPacks: any
//     newPackTitle: null | string
//     id: string
// }

export let SearchPack = () => {

    const dispatch = useDispatch();
    // const cardPacks = useSelector<AppRootStateType, SearchPackType>(state => state.packs.cardPacks);

    const [filter, setFilter] = useState('')

    let setSearch = () => {
        dispatch(searchTC(filter));
    }

    let onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    }

    return (
    <div className={s.searchPack}>
        <div>
            <input
                type="text"
                name={"search"}
                onChange={onChangeSearch}
            />
        </div>
        <Button
            label={'Search'}
            onClick={setSearch}
            backgroundColor={'blue'}
        />
    </div>
    )}

// function searchPackNameAC(cardPacks: any): any {
//     throw new Error("Function not implemented.");
// }