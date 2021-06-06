import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Error404 from '../common/Error404';
import Registration from '../components/registration/Registration';
import ForgotPassword from '../components/forgotPassword/ForgotPassword';
import Profile from '../components/profile/Profile';
import {Login} from '../components/login/Login';
import Packs from '../components/packs/Packs';
import Cards from '../components/cards/Cards';
import LearnModal from "../components/learnModal/LearnModal";
import s from './Routes.module.css'
import backImage from './../../../n4-styles/wallper2.jpg'

const  Routes = () => {

    return (
        <div className={s.body} style={{backgroundImage: `url(${backImage})`}}>
            <Switch>
                <div className={s.routes}>
                    <Route exact path={'#'} render={() => <Profile />}/>
                    <Route exact path={'/registration'} render={() => <Registration />} />
                    <Route exact path={'/forgot-password'} render={() => <ForgotPassword />} />
                    <Route exact path={'/profile'} render={() => <Profile />} />
                    <Route exact path={'/login'} render={() => <Login />} />
                    <Route exact path={'/packs'} render={() => <Packs />} />
                    <Route exact path={'/cards/'} render={() => <Cards/>} />
                    <Route exact path={'/learn/'} render={() => <LearnModal/>} />
                    <Route path={ '/404' } render={ () => <Error404 /> }/>
                    {/*<Redirect path={ '*' } to={ '/404' }/>*/}
                </div>
            </Switch>
        </div>
    );
}

export default Routes;