import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {Logout} from "../components/page1/Logout";

const Header = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {<NavLink to='/Login' activeClassName={s.active}>Login</NavLink> && <Logout/>}
            </div>
            <div className={s.item}>
                <NavLink to='/Registration' activeClassName={s.active}>Registration</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Page3' activeClassName={s.active}>Page3</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Page4' activeClassName={s.active}>Page4</NavLink>
            </div>
        </nav>
    )
}

export default Header