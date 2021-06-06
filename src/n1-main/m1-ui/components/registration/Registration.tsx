import React, {ChangeEvent, useState} from "react";
import s from './Registration.module.css'
import {Button} from "../../common/button/Button";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {
    LoadingStatusType,
    SendRegisterTC,
    setErrorTextAC,
} from "../../../m2-bll/registerReducer";
import Preloader from "../../common/preloader/Preloader";
import Error from "../../common/error/Error";


type RegistrationType = {
    mail: string
    password: string
    checkPassword: string
    errorText: null | string
    addedUser: boolean,
    loadingStatus: LoadingStatusType
}


const Registration = () => {

    const register = useSelector<AppRootStateType, RegistrationType>(state => state.register)

    const dispatch = useDispatch();

    let errorText = register.errorText
    let addedUser = register.addedUser
    let loadingStatus = register.loadingStatus

    let [mail, setMail] = useState("")
    let [password, setPassword] = useState("")
    let [checkPassword, setCheckPassword] = useState("")




        const SendRegister = () => {
            if (password !== checkPassword) {
                return dispatch(setErrorTextAC('password is not correct'))
            } else {
                dispatch(SendRegisterTC(mail, password))
                setMail('')
                setPassword('')
                setCheckPassword('')
        }}

    const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
        setMail(e.currentTarget.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckPassword(e.currentTarget.value)
           }
    const hideErrorText = () => {
        dispatch(setErrorTextAC(null))
    }



    if (addedUser) {
        return <Redirect to='/login'/>
    } else
        return (
            <div>
                <p> Please fill in the blank fields and press sign up </p>
                <form className={s.register}>
                    {loadingStatus === 'loading' ? <Preloader/> : ''}
                    <div>Email</div>
                    <input onChange={onChangeMail}/>
                    <div >Password</div>
                    <input onChange={onChangePassword}/>
                    <div >Password</div>
                    <input onChange={onChangeCheckPassword}/>
                    <Error errorText={errorText} />
                    <Button
                        disabled={loadingStatus === 'loading'}
                        onBlur={hideErrorText}
                        label={'Sign Up'}
                        onClick={SendRegister}
                        backgroundColor={'blue'}/>
                </form>
            </div>

        )

}

export default Registration;