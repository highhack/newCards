import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Packs.module.scss'
import {Button} from "../../common/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    addPackTC,
    deletePackTC,
    getPacksTC, searchMyPacksTC,
    setPackIdAC,
    updatePackTitleTC
} from "../../../m2-bll/packReducer";
import {AppRootStateType} from "../../../m2-bll/store";
import {SearchPack} from "../searchPack/SearchPack";
import {getCardsTC} from "../../../m2-bll/cardsReducer";
import {NavLink} from "react-router-dom";
import {CardPackType} from "../../../m3-dal/api";
import {SearchTable} from "../searchPack/SearchTable";
import {Paginator} from "../searchPack/Paginator";
import Preloader from "../../common/preloader/Preloader";
import Error from "../../common/error/Error";


const Packs = React.memo(() => {
    const cardPacks = useSelector<AppRootStateType, Array<CardPackType>>(state => state.packs.cardPacks)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);
    const packId = useSelector<AppRootStateType, string>(state => state.packs.packId);
    const errorText = useSelector<AppRootStateType, string | null>(state => state.register.errorText);
    const searchStatus = useSelector<AppRootStateType, 'allPacks' | 'myPacks' >(state => state.packs.searchStatus);
    const myId = useSelector<AppRootStateType, string>(state => state.app.myId);
    const currentCardsPage = useSelector<AppRootStateType, number | null>(state => state.cards.currentCardsPage);
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page);

    let [writtenTitlePack, setWrittenTitlePack] = useState('')
    let [inputPackTitle, setInputPackTitle] = useState(false)
    let [inputChangeTitle, setInputChangeTitle] = useState(false)
    let [ChangeTitle, setChangeTitle] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (isInitialized && searchStatus === 'allPacks')
            dispatch(getPacksTC(currentPage))
        else if (isInitialized && searchStatus === 'myPacks')
            dispatch(searchMyPacksTC(1, myId))

    }, [dispatch, isInitialized, currentPage, searchStatus, myId])

    const addPackTitle = () => {setInputPackTitle(true)}


    const changeTitle = (id: string) => {
        setInputChangeTitle(true)
        let pack = cardPacks.find((p) => p._id === id)
        if (pack !== undefined) {
            setChangeTitle(pack.name)
            dispatch(setPackIdAC(pack._id))
        }
    }
    const onChangePackTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setWrittenTitlePack(e.currentTarget.value);
    }
    const doChangesInTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeTitle(e.currentTarget.value);
    }
    const savePack = () => {
        dispatch(addPackTC(writtenTitlePack, currentPage))
        setWrittenTitlePack('')
        setInputPackTitle(false)
    }
    const showCards = (packId: string) => {
        dispatch(getCardsTC(packId, currentCardsPage))
    }
    const startToLearn = (packId: string) => {
        dispatch(getCardsTC(packId, currentCardsPage))
    }
    const deletePack = (packId: string) => {
        dispatch(deletePackTC(packId, currentPage))
    }
    const updateTitle = () => {
        dispatch(updatePackTitleTC(ChangeTitle, packId, currentPage))
        setInputChangeTitle(false)
    }
    const hideUpdateWindow = () => {
        setInputChangeTitle(false)
    }
    const hideInputWindow = () => {setInputChangeTitle(false)}


    if (!isLoggedIn)
        return <NavLink to='/login'>Login</NavLink>
    else if (cardPacks === undefined) return <div>Not Found Packs</div>
    else return (
            <div className={s.packs}>
                {(inputPackTitle) &&
                <div>
                    <div className={s.backgroundForWindow} onClick={hideInputWindow}>{}</div>
                    <div className={s.inputWindow}>
                        <input
                            onChange={onChangePackTitle}
                            placeholder={'Please enter new name'}
                            value={writtenTitlePack}
                            className={s.inputTitlePack}/>
                        <Button onClick={savePack} backgroundColor={'blue'} size={"large"} label={'Save'}/>
                    </div>
                </div>}
                {(inputChangeTitle) &&
                <div>
                    <div className={s.backgroundForWindow} onClick={hideUpdateWindow}>{}</div>
                    <div className={s.inputWindow} >
                        <input
                            onChange={doChangesInTitle}
                            value={ChangeTitle}
                            className={s.inputChangeTitlePack}/>
                        <Button
                            onClick={updateTitle}
                            label={'Update'}
                            backgroundColor={'blue'}
                            size={"large"}/>
                    </div>
                </div>}
                <div className={s.searchComponents}>
                    <Button onClick={addPackTitle} backgroundColor={'blue'} label={'Add Pack'}/>
                    <SearchPack/>
                    <SearchTable/>
                </div>
                <table className={s.table}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cards count</th>
                        {/*<th>Created</th>*/}
                        {/*<th>Lest update</th>*/}
                    </tr>
                    </thead>
                    {cardPacks.map((p: any) => {
                        return <tbody className={s.packData}>
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.cardsCount}</td>
                            {/*<td>{p.created}</td>*/}
                            {/*<td>{p.updated}</td>*/}
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
                                <NavLink to='/cards' className={s.linkToCards} onClick={() => showCards(p._id)}>Cards</NavLink>
                            </td>
                            <td>
                                <NavLink to='/learn'  onClick={() => startToLearn(p._id)}>Learn</NavLink>
                            </td>
                        </tr>
                        </tbody>
                    })}
                </table>
                <Paginator/>
                <Preloader/>
                <Error errorText={errorText} />
            </div>
        );
})


export default Packs;