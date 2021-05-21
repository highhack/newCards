import {Slider} from "antd";
import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {searchTC} from "../../../m2-bll/searchReducer";
import {Button} from "../../common/Button/Button";
import s from './searchPack.module.css';
import 'antd/dist/antd.css';


export let SearchPack = () => {

    const dispatch = useDispatch();
    // const min = useSelector<AppRootStateType>(state => state.search.min);
    // const max = useSelector<AppRootStateType>(state => state.search.max);
    // const cardPacks = useSelector<AppRootStateType, SearchPackType>(state => state.packs.cardPacks);

    const [filter, setFilter] = useState<string>('')
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(10)


    let setSearch = () => {
        dispatch(searchTC(filter, min, max));
    }

    let onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    }

    const minMaxValue = (arr: number[]) => {
        let min = arr[0]
        let max = arr[1]
        if (min > 0) {
            setMin(min)
        }
        if (max < 100) {
            setMax(max)
        }
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
            <div className={s.search_table}>
                <Slider onChange={minMaxValue} className={s.slider} range={{draggableTrack: true}}
                        defaultValue={[0, 10]}/>
            </div>
        </div>
    )
}

