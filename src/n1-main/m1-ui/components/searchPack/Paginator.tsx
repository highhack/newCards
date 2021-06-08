import React, {useState} from "react";
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import s from "./searchPack.module.css"
import {getPacksTC, searchMyPacksTC} from "../../../m2-bll/packReducer";
import {getCardsTC} from "../../../m2-bll/cardsReducer";



export let Paginator = () => {
    const portionSize = useSelector<AppRootStateType, number>(state => state.packs.portionSize);
    // const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount);
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount);
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page);
    const searchStatus = useSelector<AppRootStateType, 'allPacks' | 'myPacks'>(state => state.packs.searchStatus);
    const myId = useSelector<AppRootStateType, string>(state => state.app.myId);
    const inCardsPage = useSelector<AppRootStateType, boolean | undefined>(state => state.cards.inCardsPage);
    const packId = useSelector<AppRootStateType, string>(state => state.cards.packId)

    const dispatch = useDispatch()


    let pagesCount = Math.ceil(cardPacksTotalCount / 10);
    let pages = [];

    const onPageChanged = (currentPage: number) => {
        (inCardsPage)
            ? dispatch(getCardsTC(packId, currentPage))
        :(searchStatus === 'allPacks')
            ? dispatch(getPacksTC(currentPage))
            : dispatch(searchMyPacksTC(currentPage, myId))
    }

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                                     key={p}
                                     onClick={(e) => {onPageChanged(p)}}>{p}
                        </span>
                    })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>PREV</button>}

        </div>
    )
}

