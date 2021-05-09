import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Packs.module.css'
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, getPacksTC} from "../../../m2-bll/packReducer";
import {AppRootStateType} from "../../../m2-bll/store";

type PacksType = {}

const Packs = () => {

    let [writtenTitlePack, setWrittenTitlePack] = useState('')
    let [packTitle, setPackTitle] = useState(false)

    const dispatch = useDispatch()

    const addPackTitle = () => {
        setPackTitle(true)
    }
    const hideTitlePack = () => {
        setPackTitle(false)
    }

    useEffect(() => {
        const thunk = getPacksTC()
        dispatch(thunk)
    }, [])


    const packs = useSelector<AppRootStateType, any>(state => state.packs)
    let cardPacks = packs.cardPacks


    const onChangePackTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setWrittenTitlePack(e.currentTarget.value);
    }

    const savePack = () => {
        hideTitlePack()
        dispatch(addPackTC(writtenTitlePack))
    }


    if (cardPacks === undefined) return <div></div>
    else {
        return (
            <div>
                { (packTitle)
                    ? <div>
                        <input
                            onChange={onChangePackTitle}
                            placeholder={'Enter name to new pack'}
                            value={writtenTitlePack}
                            className={s.inputTitlePack}/>
                        <Button onClick={savePack} label={'Save'}/></div>
                    : ''}
            <table className={s.table}>
                <thead>
                <tr className={s.searchTitles}>
                    <th>Name</th>
                    <th>Cards count</th>
                    <th>Created</th>
                    <th>Lest update</th>
                    <th><Button onClick={addPackTitle} label={'Add Pack'}/></th>
                </tr>
                </thead>
                {cardPacks.map((p: any) =>
                    <tbody key={p._id} className={s.packData}>
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.cardsCount}</td>
                        <td>{p.created}</td>
                        <td>{p.updated}</td>
                        <td><Button label={'Update'}/></td>
                        <td><Button label={'Delete'}/></td>
                    </tr>
                    </tbody>
                )
                }
            </table>
            </div>
        );
    }
}


export default Packs;