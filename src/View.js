import React, { Component } from 'react';
import { Redirect ,Link} from 'react-router-dom';
class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogView: '',
        };
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        //console.log(id);
        fetch("http://localhost:8000/index.php/tests/"+id)
            .then(res => res.json())
            .then(
                json => {
                    console.log(json);
                     this.setState({
                         blogView:json,
                     })
                })
            .catch(error => "异常处理");
    }
    render() {
        //
        // let token = sessionStorage.getItem('token');
        // if(!token){
        //     return (
        //         <Redirect to="/login"/>
        //     )
        // }

        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="http://v3.bootcss.com/examples/dashboard/#">Project name</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Dashboard</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Settings</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Profile</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Help</a></li>
                            </ul>
                            <form className="navbar-form navbar-right">
                                <input type="text" className="form-control" placeholder="Search..." />
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-md-2 sidebar">
                            <ul className="nav nav-sidebar">
                                <li className="active"><Link to="/admin">首页</Link><span className="sr-only">(current)</span></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Reports</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Analytics</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Export</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <div className="blog-post" >
                                <h2 className="blog-post-title">{this.state.blogView.title}</h2>
                                <p className="blog-post-meta"> {this.state.blogView.time} by <a href="http://v3.bootcss.com/examples/blog/#">{this.state.blogView.author}</a></p>
                                <div dangerouslySetInnerHTML={{__html: this.state.blogView.content}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default View;
