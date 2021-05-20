import React from 'react';
import {NavLink,  Switch} from 'react-router-dom';
import s from './Header.module.css';
import {Logout} from "../components/logout/Logout";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";

const Header = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);

    return (
        <Switch>
        <nav className={s.nav}>
            <div className={s.item}>
                <Logout/>
            </div>
            {!isLoggedIn
            ?<div className={s.item}>
                <NavLink to='/Login' activeClassName={s.active}>Login</NavLink>
            </div>
            : ''}
            <div className={s.item}>
                <NavLink to='/Registration' activeClassName={s.active}>Registration</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/forgot-password' activeClassName={s.active}>Forgot Password</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/packs' activeClassName={s.active}>Packs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/cards' activeClassName={s.active}>Cards</NavLink>
            </div>
        </nav>
        </Switch>
    )
}

export default Header