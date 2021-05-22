import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {LoadingStatusType} from "../../../m2-bll/registerReducer";
import loading from './../../../../n3-images/loading.gif'
import s from'./Preloader.module.scss'

const Preloader = () => {
    let loadingStatus = useSelector<AppRootStateType, LoadingStatusType>(state => state.register.loadingStatus);
    return (
        loadingStatus === "loading"
            ? <div>
                <div className={s.background}>{}</div>
                <div className={s.window}><img alt={''} src={loading}/></div>
            </div>
            : <div>{}</div>
    );
};

export default Preloader;