import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
        <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
            <div className="sidebar-module sidebar-module-inset">
                <h4>About</h4>
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="sidebar-module">
                <h4>Archives</h4>
                <ol className="list-unstyled">
                    <li><a href="http://v3.bootcss.com/examples/blog/#">March 2014</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">February 2014</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">January 2014</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">December 2013</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">November 2013</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">October 2013</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">September 2013</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">August 2013</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">July 2013</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">June 2013</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">May 2013</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">April 2013</a></li>
                </ol>
            </div>
            <div className="sidebar-module">
                <h4>Elsewhere</h4>
                <ol className="list-unstyled">
                    <li><a href="http://v3.bootcss.com/examples/blog/#">GitHub</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">Twitter</a></li>
                    <li><a href="http://v3.bootcss.com/examples/blog/#">Facebook</a></li>
                </ol>
            </div>
        </div>
    );
  }
}

export default Sidebar;
