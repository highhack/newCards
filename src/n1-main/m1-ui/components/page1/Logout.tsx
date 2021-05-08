import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {logoutTC, RequestStatusType} from "../../../m2-bll/loginReducer";
import {Redirect} from "react-router-dom";
import {Button} from "../../common/Button/Button";


type LoginActionType = {
    email: string
    password: string
    isLoggedIn: boolean
    rememberMe: boolean
    errorText: null | string
    loadingStatus: RequestStatusType
}

export const Logout = React.memo(() => {

        const dispatch = useDispatch();
        const login = useSelector<AppRootStateType, LoginActionType>(state => state.login);

        const isLoggedIn = login.isLoggedIn;

        let setLogout = () => {
            dispatch(logoutTC(false));
        }

        if (!isLoggedIn) {
            return <Redirect to={"/Login"}/>
        }

        return <div>
            <Button
                label={'Logout'}
                backgroundColor={'blue'}
                onClick={setLogout}
            />
        </div>
    }
)

