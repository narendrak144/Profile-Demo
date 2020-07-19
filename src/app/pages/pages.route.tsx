import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import DashboardComponent from './Dashboard/DashboardComponent'

const PageRoute = (props: any) => {    
    return (
        <Switch>
             <Route exact path={`${props.match.path}/dashboard`} component={DashboardComponent} />            
             </Switch>
         
         )
}

export default PageRoute;