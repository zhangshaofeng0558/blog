import React ,{ Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="blog-masthead">
                <div className="container">
                    <nav className="blog-nav">
                        <a className="blog-nav-item active" href="http://v3.bootcss.com/examples/blog/#">Home</a>
                        <a className="blog-nav-item" href="http://v3.bootcss.com/examples/blog/#">New features</a>
                        <a className="blog-nav-item" href="http://v3.bootcss.com/examples/blog/#">Press</a>
                        <a className="blog-nav-item" href="http://v3.bootcss.com/examples/blog/#">New hires</a>
                        <a className="blog-nav-item" href="http://v3.bootcss.com/examples/blog/#">About</a>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Header;