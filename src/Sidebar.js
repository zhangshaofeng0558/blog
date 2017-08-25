import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
        <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
            <div className="sidebar-module sidebar-module-inset">
                <h4>Introduction</h4>
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="sidebar-module">
                <h4>Archives</h4>
                <ol className="list-unstyled">
                    <li><a href="/">March 2014</a></li>
                    <li><a href="/">February 2014</a></li>
                </ol>
            </div>
            <div className="sidebar-module">
                <h4>Elsewhere</h4>
                <ol className="list-unstyled">
                    <li><a href="/">GitHub</a></li>
                </ol>
            </div>
        </div>
    );
  }
}

export default Sidebar;
