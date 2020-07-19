import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';
import PagesComponent from './app/pages/pages';
import LoginComponent from './app/pages/Login/LoginComponent';



const AppRoute = (
    <Route>
        <Switch>
            <Route path="/page" component={PagesComponent} />
            <Route path="/login" component={LoginComponent} />            
            <Redirect from='*' to='/login' />
        </Switch>
    </Route>
);

export default AppRoute;