import React from "react";
import {Route, Switch} from "react-router-dom";
import Error404 from "../common/Error404";
import Registration from "../components/registration/Registration";
import Page3 from "../components/page3/Page3";
import Page4 from "../components/page4/Page4";
import {Login} from "../components/page1/Login";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <div> Hello</div>}/>
                <Route exact path={'/Login'} render={() => <Login/>}/>
                <Route exact path={'/Logout'} render={() => <Login/>}/>
                <Route exact path={'/registration'} render={() => <Registration/>}/>
                <Route exact path={'/Page3'} render={() => <Page3/>}/>
                <Route exact path={'/Page4'} render={() => <Page4/>}/>
                {/*<Route  path={'/login'} render={() => <Login />} />*/}
                {/*<Route path={ '/404' } render={ () => <Error404 /> }/>*/}
                {/*<Redirect path={ '*' } to={ '/404' }/>*/}
                <Route path={'*'} render={() => <Error404/>}/>
            </Switch>
        </div>
    );
}

export default Routes;