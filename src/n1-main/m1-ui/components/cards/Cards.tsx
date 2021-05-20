import React, {ChangeEvent, useState} from "react";
import s from './Cards.module.css'
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {SearchPack} from "../searchPack/SearchPack";
import {NavLink} from "react-router-dom";
import {CardType} from "../../../m3-dal/api";
import {addCardTC, deleteCardsTC} from "../../../m2-bll/cardsReducer";



const Cards = () => {

    let [question, setQuestion] = useState('')
    let [answer, setAnswer] = useState('')
    let [cardTitle, setCardTitle] = useState(false)

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const packId = useSelector<AppRootStateType, string>(state => state.cards.packId)
    const dispatch = useDispatch()

    const addCard = () => {
        setCardTitle(true)
    }
    const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value);
    }
    const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value);
    }
    const saveCard = () => {
        dispatch(addCardTC(question, answer, packId))
    }
    const deleteCard = (id: string, packId: string) => {
        dispatch(deleteCardsTC(id, packId))
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
    else {
        return (
            <div>
                {(cardTitle)
                    ? <div>
                        <input
                            onChange={onChangeQuestion}
                            placeholder={'Enter question'}
                            value={question}
                            className={s.inputQuestion}/>
                        <input
                            onChange={onChangeAnswer}
                            placeholder={'Enter answer'}
                            value={answer}
                            className={s.inputAnswer}/>
                        <Button
                            onClick={saveCard}
                            label={'Save'}/>
                    </div>
                    : ''}
                <SearchPack/>
                <table className={s.table}>
                    <thead>
                    <tr>
                        <th>Answer</th>
                        <th>Question</th>
                        <th>Grade</th>
                        <th>Shots</th>
                        <th><Button
                            onClick={addCard}
                            label={'Add Card'}/>
                        </th>
                    </tr>
                    </thead>
                    {cards.length === 0
                        ? <div>Not Found Cards</div>
                        : cards.map(p => {
                            return <tbody key={p.cardsPack_id} className={s.packData}>
                            <tr>
                                <td>{p.question}</td>
                                <td>{p.answer}</td>
                                <td>{p.grade}</td>
                                <td>{p.shots}</td>
                                <td><Button label={'Update'}/></td>
                                <td>
                                    <Button
                                        onClick={() => deleteCard(p._id, packId)}
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


export default Cards;