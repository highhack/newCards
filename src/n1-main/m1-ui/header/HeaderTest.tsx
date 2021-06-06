import React from 'react';
import {NavLink, Switch} from 'react-router-dom';
import s from './HeaderTest.module.scss';
import {Logout} from "../components/logout/Logout";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";

const HeaderTest = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)

    return (
        <Switch>
            <nav className={s.nav}>

                <ul>
                    <li>
                        <a className={s.item}>
                            <Logout/>
                        </a>
                    </li>
                </ul>
                {!isInitialized || !isLoggedIn
                    ? <ul>
                        <li>

                            <NavLink to='/Login' className={s.item}>Login</NavLink>

                        </li>
                    </ul>
                    : ''}
                <ul>
                    <li>
                        <NavLink to='/Registration' className={s.item}>Registration</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to='/forgot-password' className={s.item}>Forgot Password</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to='/Profile' className={s.item}>Profile</NavLink>
                    </li>
                </ul>
            </nav>
        </Switch>
    )
}


export default HeaderTest