import React, { useCallback, useState} from 'react';
import {Button} from '../../common/button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../m2-bll/store';
import {forgotPasswordTC, RequestStatusType, setAppErrorAC} from '../../../m2-bll/forgotReducer';
import Preloader from "../../common/preloader/Preloader";


const ForgotPassword = React.memo(function ForgotPassword() {
    const [value, setValue]= useState<string>("")
    const handleChange =(e:React.FormEvent<HTMLInputElement>)=> {
        if (e.currentTarget.value && e.currentTarget.value.trim() !== ""){
            setValue(e.currentTarget.value);
        }
    }
    const status =useSelector((store: AppRootStateType):RequestStatusType =>store.forgotPassword.status );
    const serverError =useSelector((store: AppRootStateType):string|null =>store.forgotPassword.error);
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        dispatch(forgotPasswordTC(value))
    setValue('')}, [value, dispatch])
    const hideErrorText = () => {dispatch(setAppErrorAC(null))}



    return (
        <div style={{marginTop:"25px"}} onClick={hideErrorText}>
            Enter your email
            {(status ==="loading")?<Preloader/>:null}
            <input type="email" value={value} onChange={handleChange} style={{display:"block",    marginLeft: "auto", marginRight:'auto', marginBottom:"5px", marginTop:"5px"}}/>
            {(status ==="succeeded")?<div style={{color:"green"}}> Please check your inbox</div>:null}
            {serverError && <div style={{color:"red"}}>{serverError}</div>}
            <Button size={'medium'} label={"Forgot Password"} backgroundColor={'blue'} onClick={onClick} onBlur={hideErrorText} />
        </div>
    );
})


export default ForgotPassword;