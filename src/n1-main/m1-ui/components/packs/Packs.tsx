import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Packs.module.css'
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, deletePackTC, getPacksTC, setPackIdAC, updatePackTitleTC} from "../../../m2-bll/packReducer";
import {AppRootStateType} from "../../../m2-bll/store";
import {SearchPack} from "../searchPack/SearchPack";
import {getCardsTC} from "../../../m2-bll/cardsReducer";
import {NavLink} from "react-router-dom";
import {CardPackType} from "../../../m3-dal/api";
import {SearchTable} from "../searchPack/SearchTable";
import {Paginator} from "../searchPack/Paginator";

// type PropsType = {
//     page: number
//     pageCount: number
// }

const Packs = React.memo(() => {
    const cardPacks = useSelector<AppRootStateType, Array<CardPackType>>(state => state.packs.cardPacks)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);
    let packId = useSelector<AppRootStateType, string>(state => state.packs.packId);

    let [writtenTitlePack, setWrittenTitlePack] = useState('')
    let [inputPackTitle, setInputPackTitle] = useState(false)
    let [inputChangeTitle, setInputChangeTitle] = useState(false)
    let [ChangeTitle, setChangeTitle] = useState('')

    // const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount);
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page);
    const dispatch = useDispatch()

    const addPackTitle = () => {
        setInputPackTitle(true)
    }


    const changeTitle = (id: string) => {
        setInputChangeTitle(true)
        let pack = cardPacks.find((p) => p._id === id)
        if (pack !== undefined) {
            setChangeTitle(pack.name)
            dispatch(setPackIdAC(pack._id))
        }
    }


    useEffect(() => {
        if (isInitialized)
            dispatch(getPacksTC(currentPage))
    }, [dispatch, isInitialized, currentPage])


    // const packs = useSelector<AppRootStateType, any>(state => state.packs)
    // let cardPacks = packs.cardPacks
    //     if (isInitialized)
    //         dispatch(getPacksTC())
    // }, [dispatch, isInitialized])


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
        dispatch(getCardsTC(packId))
    }

    const deletePack = (packId: string) => {
        dispatch(deletePackTC(packId, currentPage))
    }
    const updateTitle = () => {
        dispatch(updatePackTitleTC(ChangeTitle, packId, currentPage))
        setInputChangeTitle(false)
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
            {(inputPackTitle) &&
            <div>
                <div className={s.backgroundForWindow}>{}</div>
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
                    <div className={s.backgroundForWindow}>{}</div>
                    <div className={s.inputWindow}>
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
            <SearchPack/>
            <div>
                <SearchTable/>
            </div>
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
                    return <tbody  className={s.packData}>
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
            <Paginator/>
        </div>
    );
})


// @ts-ignore
export default Packs;
