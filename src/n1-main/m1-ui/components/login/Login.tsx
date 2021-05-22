import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {
    changCheckboxLoggedInAC,
    loginTC,
} from "../../../m2-bll/loginReducer";
import s from "../registration/Registration.module.css";
import {Redirect} from "react-router-dom";
import {Button} from "../../common/button/Button";
import Error from "../../common/error/Error";
import Preloader from "../../common/preloader/Preloader";


export type LoginActionType = {
    email: string
    password: string
    isLoggedIn: boolean
    rememberMe: boolean
}

export const Login = () => {

    const dispatch = useDispatch();
    const login = useSelector<AppRootStateType, LoginActionType>(state => state.login);
    const errorText = useSelector<AppRootStateType, string | null>(state => state.register.errorText);

    let isLoggedIn = login.isLoggedIn;
    let rememberMe = login.rememberMe;

    const [pass, setPass] = useState("qaswq123")
    const [mail, setMail] = useState("GABA@gmail.com")

    const setLogin = () => {

        dispatch(loginTC(mail, pass, rememberMe));
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

    return (
        <div>
            <Preloader />
            <Error errorText={errorText}/>
            <p> Please fill in the blank fields and press LOGIN </p>
            <p>or use common test account credentials:</p>
            <p>Email: <b>nya-admin@nya.nya</b></p>
            <p>Password: <b>1qazxcvBG</b></p>
            <form className={s.register}>
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
                <div>
                    <input
                        type={"checkbox"}
                        name="rememberMe"
                        onChange={onChangCheckbox}
                    />
                    <span>Remember me</span>
                </div>
                <Button
                    label={'Login'}
                    onClick={setLogin}
                    backgroundColor={'blue'}
                />
            </form>
        </div>
    )
}

