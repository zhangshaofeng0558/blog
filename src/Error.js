import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const styles = {
    starter : {
        padding: '40px 15px',
        textAlign: 'center',
    },
};
class Error extends Component {


    render() {
        return (
                <div style={{marginTop:50}}>
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container">
                            <div id="navbar" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/">首页</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="container">

                        <div className="starter-template" style={styles.starter}>
                            <h1>Data request exception</h1>
                            <p className="lead">你走过最远的路，是我的套路。</p>
                        </div>

                    </div>
                </div>
        );
    }
}

export default Error;
