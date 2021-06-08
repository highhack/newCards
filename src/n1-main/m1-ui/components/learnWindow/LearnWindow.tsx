import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {CardType} from "../../../m3-dal/api";
import s from './LearnWindow.module.scss'
import Preloader from "../../common/preloader/Preloader";
import {LoadingStatusType} from "../../../m2-bll/registerReducer";
import {Button} from "../../common/button/Button";
import {getCardsTC, SerCurrentCardsPageAC} from "../../../m2-bll/cardsReducer";


const LearnWindow = () => {

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const loadingStatus = useSelector<AppRootStateType, LoadingStatusType>(state => state.register.loadingStatus);
    const currentCardsPage = useSelector<AppRootStateType, number>(state => state.cards.currentCardsPage);
    const packId = useSelector<AppRootStateType, string>(state => state.cards.packId)
    console.log(cards)
    console.log(loadingStatus)
    console.log(currentCardsPage)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsTC(packId, currentCardsPage))
        return () => {
        }
    }, [currentCardsPage, dispatch, packId])


    const [cardNumber, setCardNumber] = useState(0)
    const [answerShowed, setAnswerShowed] = useState(false)
    const nextCard = () => {
        setAnswerShowed(false)
        if (cardNumber < cards.length - 1) setCardNumber(cardNumber + 1)
        else {
            dispatch(getCardsTC(packId, currentCardsPage + 1 ))
            setCardNumber(0)
            dispatch(SerCurrentCardsPageAC(currentCardsPage + 1))
        }
    }
    const prevCard = () => {
        setAnswerShowed(false)
        if (cardNumber >= 0) setCardNumber(cardNumber - 1)
        else {
            dispatch(getCardsTC(packId, currentCardsPage - 1))
            dispatch(SerCurrentCardsPageAC(currentCardsPage - 1))
            setCardNumber(cards.length)

        }
    }
    const showAnswer = () => {
        setAnswerShowed(true)
    }
    return (
        <div>
            <div>
                <Preloader/>
                {/*<Error errorText={errorText}/>*/}
            </div>
            <div className={s.background}>{}</div>
            {loadingStatus === 'succeeded'
                ? <div className={s.window}>
                    {!answerShowed
                        ? <div className={s.question}>{cards[cardNumber].question}</div>
                        : <div className={s.answer}>{cards[cardNumber].answer}</div>
                    }
                    <Button label={'Show Answer'} onClick={showAnswer}/>
                    <div>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    <div className={s.prevNext}>
                        <span onClick={prevCard}>prev</span>
                        <span onClick={nextCard}>next</span>
                    </div>
                </div>
                : <div>{}</div>}

        </div>

    );
}

export default LearnWindow;