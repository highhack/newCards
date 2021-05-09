import React, {ChangeEvent} from "react";
import s from './Registration.module.css'
import {Button} from "../../common/Button/Button";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {
    LoadingStatusType,
    SendRegisterTC,
    setCheckPasswordAC,
    setErrorTextAC,
    setMailAC,
    setPasswordAC
} from "../../../m2-bll/registerReducer";


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

    let mail = register.mail
    let password = register.password
    let checkPassword = register.checkPassword
    let errorText = register.errorText
    let addedUser = register.addedUser
    let loadingStatus = register.loadingStatus

    // let [mail, setMail] = useState("")
    // let [password, setPassword] = useState("")
    // let [checkPassword, setCheckPassword] = useState("")
    // let [errorText, setErrorText] = useState<string | null>(null)



        const SendRegister = () => {
            if (password !== checkPassword) {
                return dispatch(setErrorTextAC('password is not correct'))
            } else
                dispatch(SendRegisterTC(mail, password))
        }

    const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMailAC(e.currentTarget.value))
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPasswordAC(e.currentTarget.value))
    }
    const onChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCheckPasswordAC(e.currentTarget.value))
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
                    {loadingStatus === 'loading' ? <div>Loading...</div>: ''}
                    <div>Email</div>
                    <input onChange={onChangeMail}/>
                    <div >Password</div>
                    <input onChange={onChangePassword}/>
                    <div >Password</div>
                    <input onChange={onChangeCheckPassword}/>
                    <div className={s.errorText} >{errorText !== null
                        ? <div className={s.errorText}>{errorText}</div>
                        : ''}
                    </div>

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