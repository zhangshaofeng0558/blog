import React ,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className="blog-masthead">
                <div className="container">
                    <nav className="blog-nav">
                        <NavLink to="/" className="blog-nav-item"  >首页</NavLink>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Header;