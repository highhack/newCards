import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {
    changCheckboxLoggedInAC,
    loginTC,
    RequestStatusType,
    setAppStatusAC,
    setErrorTextLoggedInAC
} from "../../../m2-bll/loginReducer";
import s from "../registration/Registration.module.css";
import {Redirect} from "react-router-dom";
import {Button} from "../../common/Button/Button";


type LoginActionType = {
    email: string
    password: string
    isLoggedIn: boolean
    rememberMe: boolean
    errorText: null | string
    loadingStatus: RequestStatusType
}

export const Login = React.memo(() => {

        const login = useSelector<AppRootStateType, LoginActionType>(state => state.login);

        let password = login.password;
        let email = login.email;
        let isLoggedIn = login.isLoggedIn;
        let errorText = login.errorText;
        let rememberMe = login.rememberMe;
        let loadingStatus = login.loadingStatus

        const [error, setError] = useState("")
        const [pass, setPass] = useState(password)
        const [mail, setMail] = useState(email)
        // const [status, setStatus] = useState<RequestStatusType>('idle')

        const dispatch = useDispatch();


        const setLogin = () => {
            // setStatus('loading...')
            // dispatch(setAppStatusAC("loading..."));
            if (isLoggedIn) {
                // return setError('password or  email is not correct')
                return dispatch(setErrorTextLoggedInAC(errorText))
                // setStatus("")
            } else {
                dispatch(loginTC(mail, pass))
            }
            dispatch(setAppStatusAC(""))

        };

        const setErrorText = () => {
            dispatch(setErrorTextLoggedInAC(error))
        };

        const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
            setPass(e.currentTarget.value);
        }
        const onChangEmail = (e: ChangeEvent<HTMLInputElement>) => {
            setMail(e.currentTarget.value);
        }
        const onChangCheckbox = () => {
            dispatch(changCheckboxLoggedInAC(rememberMe))
        }

        // if (isLoggedIn) {
        //     return <Redirect to={"/Login"}/>
        // }
        {
            isLoggedIn ? <Redirect to={"/Login"}/> : <Redirect to={"/Profile"}/>

        }

        return <div>
            <p> Please fill in the blank fields and press LOGIN </p>
            <p>or use common test account credentials:</p>
            <p>Email: <b>nya-admin@nya.nya</b></p>
            <p>Password: <b>1qazxcvBG</b></p>
            <form className={s.register}>
                {loadingStatus === 'loading...' ? <div>Loading...</div>: ''}
                {/*<div style={{color: "green"}}><b>{status}</b></div>*/}
                <div>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={mail}
                        onChange={onChangEmail}
                    />
                </div>
                <div>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={pass}
                        onChange={onChangePassword}
                    />
                </div>
                <input
                    type={"checkbox"}
                    name="rememberMe"
                    onChange={onChangCheckbox}
                />
                <div className={s.errorText}>{errorText !== null
                    ? <div className={errorText}>{errorText}</div>
                    : ''}
                </div>
                <Button
                    label={'Login'}
                    onClick={setLogin}
                    onBlur={setErrorText}
                    backgroundColor={'blue'}
                    disabled={loadingStatus === "loading..."}
                />
            </form>
        </div>
    }
)
