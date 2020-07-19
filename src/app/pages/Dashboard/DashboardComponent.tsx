import React, { Component } from 'react';


class DashboardComponent extends Component<any, any> {

    constructor(props: any) {
        super(props);

    }

    render() {

        return (
            <div>
                <aside id="left-panel" className="left-panel">
                    <nav className="navbar navbar-expand-sm navbar-default">
                        <div id="main-menu" className="main-menu collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="#" title="Dashboard"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                                </li>
                                <li className="menu-title" title="Profile">Profile</li>
                                <li>
                                    <a href="#" title="Agent"> <i className="menu-icon fa fa-user" title="Agent"></i>Agent </a>
                                </li>
                                <li>
                                    <a href="#" title="Client"> <i className="menu-icon fa fa-user" title="Client"></i>Client </a>
                                </li>
                                <li>
                                    <a href="#" title="Freelancer"> <i className="menu-icon fa fa-user" title="Freelancer"></i>Freelancer </a>
                                </li>


                            </ul>
                        </div>
                    </nav>
                </aside>

                <div id="right-panel" className="right-panel">

                    <header id="header" className="header">
                        <div className="top-left">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#"><img src="images/logo.png" alt="Logo" /></a>
                                <a className="navbar-brand hidden" href="#"><img src="images/logo2.png" alt="Logo" /></a>
                                <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a>
                            </div>
                        </div>
                        <div className="top-right">
                            <div className="header-menu">
                                <div className="header-left">
                                    <div className="user-area dropdown float-right">
                                        <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="user-avatar rounded-circle fa fa-user"></i>
                                        </a>

                                        <div className="user-menu dropdown-menu">
                                            <a className="nav-link" href="#"><i className="fa fa-user"></i>My Profile</a>

                                            <a className="nav-link" href="#"><i className="fa fa-user"></i>Notifications <span className="count">13</span></a>

                                            <a className="nav-link" href="#"><i className="fa fa-cog"></i>Settings</a>

                                            <a className="nav-link" href="#"><i className="fa fa-power-off"></i>Logout</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="content">

                    </div>

                    <div className="clearfix"></div>


                </div>
            </div>
        );
    }
}

export default DashboardComponent;