import { Link } from 'react-router-dom';
import React from 'react';
import * as logo from '../../../images/logo.png'

const LoginComponent = (props: any) => {
    return (
        <div>
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="index.html">
                                <img className="align-content" src='../../../images/logo.png' alt="" />
                            </a>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /> Remember Me
                                 </label>
                                    <label className="pull-right">
                                        <a href="#">Forgotten Password?</a>
                                    </label>

                                </div>
                                
                                <Link to="/page/dashboard"><button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button></Link>
                                <div className="register-link m-t-15 text-center">
                                    <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default LoginComponent;