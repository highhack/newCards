import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Packs.module.css'
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, deletePackTC, getPacksTC, updatePackTitleTC} from "../../../m2-bll/packReducer";
import {AppRootStateType} from "../../../m2-bll/store";
import {SearchPack} from "../searchPack/SearchPack";
import {getCardsTC} from "../../../m2-bll/cardsReducer";
import {NavLink} from "react-router-dom";
import {CardPackType} from "../../../m3-dal/api";


const Packs = () => {
    const cardPacks = useSelector<AppRootStateType, Array<CardPackType>>(state => state.packs.cardPacks)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);



    let [writtenTitlePack, setWrittenTitlePack] = useState('')
    let [inputPackTitle, setInputPackTitle] = useState(false)
    let [inputChangeTitle, setInputChangeTitle] = useState(false)
    let [ChangeTitle, setChangeTitle] = useState('')

    const dispatch = useDispatch()

    const addPackTitle = () => {
        setInputPackTitle(true)
    }

    let packId: string

    const changeTitle = (id: string) => {
        debugger
        setInputChangeTitle(true)
        let pack = cardPacks.find((p) => p._id === id)
        if (pack !== undefined) {setChangeTitle(pack.name)
            packId = pack._id}
         return packId
    }





    useEffect(() => {
        if (isInitialized)
            dispatch(getPacksTC())
    }, [dispatch, isInitialized])


    const onChangePackTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setWrittenTitlePack(e.currentTarget.value);
    }
    const doChangesInTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeTitle(e.currentTarget.value);
    }

    const savePack = () => {
        dispatch(addPackTC(writtenTitlePack))
        setWrittenTitlePack('')
    }

    const showCards = (packId: string) => {
        dispatch(getCardsTC(packId))
    }

    const deletePack = (packId: string) => {
        dispatch(deletePackTC(packId))
    }
    const updateTitle = () => {
        debugger
        let id = changeTitle(packId)
        debugger
        dispatch(updatePackTitleTC(ChangeTitle, id))
    }



    if (!isLoggedIn)
        return (
            <div>
                <div>
                    You are not authorized
                </div>
                <NavLink to='/login'>Login</NavLink>
            </div>
        )
    if (cardPacks === undefined) return <div>Not Found Packs</div>

    return (
        <div>
            {(inputPackTitle)
                ? <div>
                    <input
                        onChange={onChangePackTitle}
                        placeholder={'Please enter the name of new pack'}
                        value={writtenTitlePack}
                        className={s.inputTitlePack}/>
                    <Button onClick={savePack} label={'Save'}/></div>
                : ''}
                {(inputChangeTitle)
                ? <div>
                    <input
                        onChange={doChangesInTitle}
                        value={ChangeTitle}
                        className={s.inputChangeTitlePack}/>
                    <Button
                        onClick={updateTitle}
                        label={'Update'}/></div>
                : ''}
            <SearchPack/>
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
                    return <tbody key={p._id} className={s.packData}>
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.cardsCount}</td>
                        <td>{p.created}</td>
                        <td>{p.updated}</td>
                        <td>
                            <Button
                                onClick={() => changeTitle(p._id)}
                                label={'Update'}/>
                        </td>
                        <td>
                            <Button
                                onClick={() => deletePack(p._id)}
                                label={'Delete'}/>
                        </td>
                        <td>
                            <NavLink to='/cards' onClick={() => showCards(p._id)}>Cards</NavLink>
                        </td>
                    </tr>
                    </tbody>
                })
                }
            </table>
        </div>
    );
}


export default Packs;