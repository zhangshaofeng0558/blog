import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const url = "http://localhost:8000/index.php";
class BackNavBar extends Component {

    handleLogout(e){
        sessionStorage.removeItem('token');
    }
    render() {
        return (

                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/" >首页</Link>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="" className="navbar-brand" onClick={this.handleLogout.bind(this)}>登出</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default BackNavBar;
