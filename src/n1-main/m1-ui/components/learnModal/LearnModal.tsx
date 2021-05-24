import React, {useState} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {CardType} from "../../../m3-dal/api";
import s from './LearnModal.module.scss'


const LearnModal = () => {

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)

    const [cardNumber, setCardNumber] = useState(0)

   const  nextCard = () => {
       cardNumber <= cards.length && setCardNumber(cardNumber + 1)
   }
   const  prevCard = () => {
       cardNumber >= 0 && setCardNumber(cardNumber - 1)
   }
    return (
        <div>
            <div className={s.background}>{}</div>
            <div className={s.window}>
                <div>{cards[cardNumber].question}</div>
                <div>{cards[cardNumber].answer}</div>
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                <div>
                    <span onClick={prevCard}>prev</span>
                    <span onClick={nextCard}>next</span>
                </div>
            </div>

        </div>

    );
}

export default LearnModal;