import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from "../../common/button/Button";
import s from './searchPack.module.css'
import {searchAllPacksTC} from "../../../m2-bll/packReducer";

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
        dispatch(searchAllPacksTC(filter));
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
