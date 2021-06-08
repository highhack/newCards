import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {
    changCheckboxLoggedInAC,
    loginTC,
} from "../../../m2-bll/loginReducer";
import s from "./Login.module.css";
import {NavLink, Redirect} from "react-router-dom";
import {Button} from "../../common/button/Button";
import Error from "../../common/error/Error";
import Preloader from "../../common/preloader/Preloader";



type LoginActionType = {
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
            <p className={s.expleningText}> Please fill in the blank fields and press LOGIN </p>
            <p className={s.expleningText}>or use common test account credentials</p>
            <p className={s.expleningText}>if you are not registered, go to the <NavLink to='/Registration' activeClassName={s.active}>registration</NavLink> page</p>
            <form className={s.register}>
                <div className={s.titleWithInput}>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={mail}
                        onChange={onChangEmail}
                    />
                </div >
                <div className={s.titleWithInput}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={pass}
                        onChange={onChangePassword}
                    />
                </div>
                <div className={s.titleWithInput}>
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
            <div>
                <NavLink to='/forgot-password' activeClassName={s.active}>Forgot Password</NavLink>
            </div>
        </div>
    )
}

