import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {
    changCheckboxLoggedInAC,
    loginTC,
    RequestStatusType,
    setErrorTextLoggedInAC
} from "../../../m2-bll/loginReducer";
import s from "../registration/Registration.module.css";
import {Redirect} from "react-router-dom";
import {Button} from "../../common/Button/Button";


export type LoginActionType = {
    email: string
    password: string
    isLoggedIn: boolean
    rememberMe: boolean
    errorText: null | string
    loadingStatus: RequestStatusType
}

export const Login = () => {

    const dispatch = useDispatch();
    const login = useSelector<AppRootStateType, LoginActionType>(state => state.login);

    let isLoggedIn = login.isLoggedIn;
    let errorText = login.errorText;
    let rememberMe = login.rememberMe;
    let loadingStatus = login.loadingStatus

    const [pass, setPass] = useState("1qazxcvBG")
    const [mail, setMail] = useState("nya-admin@nya.nya")

    const setLogin = () => {
            dispatch(loginTC(mail, pass, rememberMe));
    };

    const setErrorText = () => {
        dispatch(setErrorTextLoggedInAC(""));
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value);
    }
    const onChangEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setMail(e.currentTarget.value);
    }
    const onChangCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changCheckboxLoggedInAC(e.currentTarget.checked))
    }

    if (isLoggedIn) {
        return <Redirect to={"/profile"}/>
    }

    return <div onClick={setErrorText}>
        <p> Please fill in the blank fields and press LOGIN </p>
        <p>or use common test account credentials:</p>
        <p>Email: <b>nya-admin@nya.nya</b></p>
        <p>Password: <b>1qazxcvBG</b></p>
        <form className={s.register}>
            {loadingStatus === 'loading...' ? <div>{loadingStatus}</div> : ''}
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
                backgroundColor={'blue'}
                disabled={loadingStatus === "loading..."}
            />
        </form>
    </div>
}

