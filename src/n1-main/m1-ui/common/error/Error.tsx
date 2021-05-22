import React from 'react';
import s from './Error.module.scss'
import {useDispatch} from "react-redux";
import {setErrorTextAC} from "../../../m2-bll/registerReducer";


type ErrorProps = {
    errorText: string | null
}
const Error = (props: ErrorProps) => {
    let dispatch = useDispatch()
    const hideError = () => {
        dispatch(setErrorTextAC(null))
    }
    if (props.errorText !== null)
        return (
            <div onClick={hideError}>
                <div className={s.background}>{}</div>

                <div className={s.window}>
                    <div className={s.errorText}>{props.errorText}</div>
                </div>

            </div>)
    else
        return <div>{}</div>
}

export default Error;