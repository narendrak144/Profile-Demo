import React, { Component } from 'react';
import ProfileComponent  from "../../shared/profile/ProfileComponent";
import { Link } from 'react-router-dom';

class ClientProfileComponent extends Component<any, any> {

    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <div>               
               <div className="container">
                    <div className="page-header">
                    <Link to="/page/dashboard"><a className="btn btn-primary pull-left" role="button" href="#">
                          Back To Dashboard
                        </a></Link>
                        <h3 className="text-center">Client Profile</h3>
                    </div>

                </div>
                <hr />
               <ProfileComponent></ProfileComponent>
            </div>
        );
    }
}
export default ClientProfileComponent;