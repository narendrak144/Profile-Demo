import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import DashboardComponent from './Dashboard/DashboardComponent'
import AgentProfileComponent from "./Profile/AgentProfile";
import ClientProfileComponent from "./Profile/ClientProfile";
import FreelancerProfileComponent from "./Profile/FreelancerProfile";

const PageRoute = (props: any) => {    
    return (
        <Switch>
             <Route exact path={`${props.match.path}/dashboard`} component={DashboardComponent} />  
             <Route exact path={`${props.match.path}/agentprofile`} component={AgentProfileComponent} />  
             <Route exact path={`${props.match.path}/clientprofile`} component={ClientProfileComponent} />  
             <Route exact path={`${props.match.path}/freelancerprofile`} component={FreelancerProfileComponent} />            
             </Switch>
         
         )
}

export default PageRoute;