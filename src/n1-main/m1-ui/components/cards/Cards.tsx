import React, {ChangeEvent, useState} from "react";
import s from './Cards.module.css'
import {Button} from "../../common/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {SearchPack} from "../searchPack/SearchPack";
import {CardType} from "../../../m3-dal/api";
import {addCardTC, deleteCardsTC, setCardIdAC, updateCardTitleTC} from "../../../m2-bll/cardsReducer";
import { Paginator } from "../searchPack/Paginator";



const Cards = React.memo(() => {

    let [question, setQuestion] = useState('')
    let [answer, setAnswer] = useState('')
    let [cardTitle, setCardTitle] = useState(false)
    let [inputChangeTitle, setInputChangeTitle] = useState(false)

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const packId = useSelector<AppRootStateType, string>(state => state.cards.packId)
    let cardId = useSelector<AppRootStateType, string>(state => state.cards.cardId);
    const dispatch = useDispatch()

    const addCard = () => {
        setCardTitle(true)
    }

    const changeTitle = (id: string) => {
        setInputChangeTitle(true)
        let card = cards.find((p) => p._id === id)
        if (card !== undefined) {
            setQuestion(card.question)
            setAnswer(card.answer)
            dispatch(setCardIdAC(card._id))
        }
    }
    const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value);
    }
    const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value);
    }

    const saveCard = () => {
        dispatch(addCardTC(question, answer, packId))
        setCardTitle(false)
        setQuestion('')
        setAnswer('')
    }
    const deleteCard = (id: string, packId: string) => {
        dispatch(deleteCardsTC(id, packId))
    }

    const updateTitle = () => {
        dispatch(updateCardTitleTC(question,answer, cardId, packId))
        setInputChangeTitle(false)
    }


        return (
            <div>
                {(cardTitle)
                    ? <div>
                        <div className={s.backgroundForWindow}>{}</div>
                        <div className={s.inputWindow}>
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
                            backgroundColor={'blue'}
                            onClick={saveCard}
                            label={'Save'}/>
                    </div>
                    </div>
                    : ''}
                {(inputChangeTitle) &&
                <div>
                    <div className={s.backgroundForWindow}>{}</div>
                    <div className={s.inputWindow}>
                        <input
                            onChange={onChangeQuestion}
                            value={question}
                            className={s.inputChangeTitlePack}/>
                            <input onChange={onChangeAnswer}
                            value={answer}
                            className={s.inputChangeTitlePack}/>
                        <Button
                            onClick={updateTitle}
                            label={'Update'}
                            backgroundColor={'blue'}
                            size={"large"}/>
                    </div>
                </div>}
                <SearchPack/>
                <table className={s.table}>
                    <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Grade</th>
                        <th>Shots</th>
                        <th><Button
                            onClick={addCard}
                            label={'Add Card'}/>
                        </th>
                    </tr>
                    </thead>
                    {cards.length === 0
                        ? <tbody><tr><td>Not Found Cards</td></tr></tbody>
                        : cards.map(p => {
                            return <tbody className={s.packData}>
                            <tr>
                                <td>{p.question}</td>
                                <td>{p.answer}</td>
                                <td>{p.grade}</td>
                                <td>{p.shots}</td>
                                <td>
                                    <Button
                                        onClick={() => changeTitle(p._id)}
                                        label={'Update'}/></td>
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
                <Paginator />
            </div>
        );
    }
)


export default Cards;