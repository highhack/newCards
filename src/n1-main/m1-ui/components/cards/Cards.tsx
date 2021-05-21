import React, {ChangeEvent, useState} from "react";
import s from './Cards.module.css'
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {SearchPack} from "../searchPack/SearchPack";
import {addCardTC} from "../../../m2-bll/cardsReducer";
import { Paginator } from "../searchPack/Paginator";



const Cards = () => {

    let [question, setQuestion]= useState('')
    let [answer, setAnswer]= useState('')
    let [cardTitle, setCardTitle] = useState(false)

    const cardsData = useSelector<AppRootStateType, any>(state => state.cards)
    let cards = cardsData.cards

    const dispatch = useDispatch()

    const addCard = () => {
        setCardTitle(true)
    }
    // const hideTitlePack = () => {
    //     setPackTitle(false)
    // }


    const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value);
    }
    const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value);
    }

    const saveCard = () => {
        dispatch(addCardTC(question, answer))
    }


    if (cards === undefined) return <div>Not Found Packs</div>
    else {
        return (
            <div>
                { (cardTitle)
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
                <SearchPack />
                <table className={s.table}>
                    <thead>
                    <tr>
                        <th>Answer</th>
                        <th>Question</th>
                        <th>Grade</th>
                        <th>Shots</th>
                        <th><Button
                            onClick={addCard}
                            label={'Add Pack'}/>
                        </th>
                    </tr>
                    </thead>
                    {cards.map((p: any) => {
                        return <tbody key={p.cardsPack_id} className={s.packData}>
                        <tr>
                            <td>{p.answer}</td>
                            <td>{p.question}</td>
                            <td>{p.grade}</td>
                            <td>{p.shots}</td>
                            <td><Button label={'Update'}/></td>
                            <td>
                                <Button
                                    id={p.cardsPack_id}
                                    // onClick={deletePack}
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
}


export default Cards;