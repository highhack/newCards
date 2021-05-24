import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import { setSearchStatusAC} from "../../../m2-bll/packReducer";
import s from "../../header/Header.module.css";

const Profile = () => {
    let dispatch = useDispatch()

    return (
        <div>
            <div className={s.item}>
                <NavLink to='/packs' onClick={()=>dispatch(setSearchStatusAC('myPacks'))}>My Packs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/packs' onClick={()=>dispatch(setSearchStatusAC('allPacks'))} activeClassName={s.active}>All Packs</NavLink>
            </div>
            <div></div>
        </div>

    );
}

export default Profile;