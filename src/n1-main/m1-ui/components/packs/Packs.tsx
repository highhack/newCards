import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Packs.module.css'
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getPacksTC} from "../../../m2-bll/packReducer";
import {AppRootStateType} from "../../../m2-bll/store";
import {getCardsTC} from "../../../m2-bll/cardsReducer";
import {NavLink} from "react-router-dom";
import {SearchPack} from "../searchPack/SearchPack";
import {SearchTable} from "../searchPack/SearchTable";
import {Paginator} from "../searchPack/Paginator";

// type PropsType = {
//     page: number
//     pageCount: number
// }

const Packs = () => {

    let [writtenTitlePack, setWrittenTitlePack] = useState('')
    let [packTitle, setPackTitle] = useState(false)

    // const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount);
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page);
    const dispatch = useDispatch()

    const addPackTitle = () => {
        setPackTitle(true)
    }

    useEffect(() => {
        const thunk = getPacksTC(currentPage)
        dispatch(thunk)
    }, [dispatch, currentPage])


    const packs = useSelector<AppRootStateType, any>(state => state.packs)
    let cardPacks = packs.cardPacks


    const onChangePackTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setWrittenTitlePack(e.currentTarget.value);
    }

    const savePack = () => {
        // dispatch(addPackTC(writtenTitlePack))
        setWrittenTitlePack('')
    }

    const showCards = (packId: string) => {
        dispatch(getCardsTC(packId))
    }

    const deletePack = (packId: string) => {
        // dispatch(deletePackTC(packId))
    }

    if (cardPacks === undefined) return <div>Not Found Packs</div>
    else {
        return (
            <div>
                {(packTitle)
                    ? <div>
                        <input
                            onChange={onChangePackTitle}
                            placeholder={'Enter name to new pack'}
                            value={writtenTitlePack}
                            className={s.inputTitlePack}/>
                        <Button onClick={savePack} label={'Save'}/></div>
                    : ''}
                <SearchPack/>
                <SearchTable />
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
                            <td><Button label={'Update'}/></td>
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
                <Paginator />
            </div>
        );
    }
}


export default Packs;