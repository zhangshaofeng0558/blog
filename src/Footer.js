import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
        <footer className="blog-footer">
            <p>Blog template built for <a href="http://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            <p>
                <Link to="/admin">Back to front</Link>
            </p>
        </footer>
    );
  }
}

export default Footer;
