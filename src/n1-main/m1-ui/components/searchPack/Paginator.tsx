import React, {useState} from "react";
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from "../../../m2-bll/store";
import s from "./searchPack.module.css"
import { getPacksTC } from "../../../m2-bll/packReducer";

// type PaginatorType = {
//     page: number
//     totalItemsCount: number
//     pageCount: number
//     portionSize: number
//     onPageChanged: () => void
//     cardPacksTotalCount: number
//    
// }



export let Paginator = () => {

    const portionSize = useSelector<AppRootStateType, number>(state => state.packs.portionSize);
    // const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount);
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount);
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page);

    const dispatch = useDispatch()


    let pagesCount = Math.ceil(cardPacksTotalCount / portionSize);
    let pages = [];

   const onPageChanged =  (currentPage: number) => {
        dispatch(getPacksTC(currentPage))
    }

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / 10);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                                     key={p}
                                     onClick={(e) => {
                                         onPageChanged(p)
                                     }}>{p}</span>
                    })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>PREV</button>
            }

        </div>
    )
}

