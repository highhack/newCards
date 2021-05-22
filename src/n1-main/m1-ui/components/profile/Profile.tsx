import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchMyPacksTC, setSearchStatusAC} from "../../../m2-bll/packReducer";
import {AppRootStateType} from "../../../m2-bll/store";
import s from "../../header/Header.module.css";

const Profile = () => {
    let dispatch = useDispatch()

    const myId = useSelector<AppRootStateType, string>(state => state.app.myId);

    const showMyPacks = () => {
        dispatch(setSearchStatusAC('myPacks'))
        dispatch(searchMyPacksTC(myId))
    }
    return (
        <div>
            <div className={s.item}>
                <NavLink to='/packs' onClick={showMyPacks}>My Packs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/packs' activeClassName={s.active}>All Packs</NavLink>
            </div>
            <div></div>
        </div>

    );
}

export default Profile;