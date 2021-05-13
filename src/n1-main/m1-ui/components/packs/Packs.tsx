import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Packs.module.css'
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, deletePackTC, getPacksTC} from "../../../m2-bll/packReducer";
import {AppRootStateType} from "../../../m2-bll/store";
import {SearchPack} from "../SearchPack/SearchPack";
import {SearchTable} from "../SearchPack/SearchTable";


type PacksType = {
    writtenTitlePack: string
    packTitle: string
}

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
    }, [dispatch])


    const packs = useSelector<AppRootStateType, any>(state => state.packs)
    let cardPacks = packs.cardPacks



    const onChangePackTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setWrittenTitlePack(e.currentTarget.value);
    }

    const savePack = () => {
        dispatch(addPackTC(writtenTitlePack))
    }


    if (cardPacks === undefined) return <div>Not Found Packs</div>
    else {
        return (
            <div>
                <SearchPack />
                <SearchTable />;
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
                <tr>
                    <th>Name</th>
                    <th>Cards count</th>
                    <th>Created</th>
                    <th>Lest update</th>
                    <th><Button onClick={addPackTitle} label={'Add Pack'}/></th>
                </tr>
                </thead>
                {cardPacks.map((p: any) => {
                    const deletePack = () => {
                       let a =  dispatch(deletePackTC(p._id))
                        return a
                    }
                    return <tbody key={p._id} className={s.packData}>
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.cardsCount}</td>
                        <td>{p.created}</td>
                        <td>{p.updated}</td>
                        <td><Button label={'Update'}/></td>
                        <td>
                            <Button
                                id={p._id}
                                onClick={deletePack}
                                label={'Delete'}/>
                        </td>
                    </tr>
                    </tbody>
                })
                }
            </table>
            </div>
        );
    }
}


export default Packs;