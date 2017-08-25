import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BackSlideBar extends Component {
    render() {
        const styles = {
            selected: {
                color: '#fff',
                backgroundColor: '#428bca',
            },
        };
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li><NavLink to="/admin"  activeStyle={styles.selected}>首页</NavLink></li>
                    <li><NavLink to="/create"  activeStyle={styles.selected}>创建</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default BackSlideBar;
