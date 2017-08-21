import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import List from './List';
class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogList:[],
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        e.preventDefault();
        //console.log(e.target.title);
        let token = sessionStorage.getItem('token');
        let id = e.target.title;
        fetch("http://localhost:8000/index.php/tests/"+id+"?"+"token="+token,{method:"DELETE"})
            .then(res => {
                console.log(res.status);
                //return res.json();
            })
            .then(
                json => {
                    console.log(json);
                })
             .catch(error => "异常处理");
    }

    componentDidMount(){
        fetch("http://localhost:8000/tests")
            .then(res => res.json())
            .then(
                json => {
                    //console.log(json);
                     this.setState({
                         blogList:json,
                     })
                })
            .catch(error => "异常处理");
    }
    render() {

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
                            <h1 className="page-header">Dashboard</h1>

                            <div className="row placeholders">
                                <div className="col-xs-6 col-sm-3 placeholder">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                                        <h4>Label</h4>
                                        <span className="text-muted">Something else</span>
                                </div>
                            </div>

                            <h2 className="sub-header">Section title</h2>
                            <Link to={"/create" }>创建博客</Link>
                            <List blogList={this.state.blogList} handleDelete = {this.handleDelete}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
