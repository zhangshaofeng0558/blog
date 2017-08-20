import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogData:'',
        };
    }

    componentDidMount(){
        fetch("http://localhost:8000/index.php/tests")
            .then(res => res.json())
            .then(
                json => {
                    console.log(json);
                     this.setState({
                         blogData:json,
                     })
                })
            .catch(error => "异常处理");
    }
    render() {

        let token = sessionStorage.getItem('token');
        if(!token){
            return (
                <Redirect to="/login"/>
            )
        }

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
                                <li className="active"><a href="http://v3.bootcss.com/examples/dashboard/#">Overview <span className="sr-only">(current)</span></a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Reports</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Analytics</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/#">Export</a></li>
                            </ul>
                            <ul className="nav nav-sidebar">
                                <li><a href="http://v3.bootcss.com/examples/dashboard/">Nav item</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/">Nav item again</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/">One more nav</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/">Another nav item</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/">More navigation</a></li>
                            </ul>
                            <ul className="nav nav-sidebar">
                                <li><a href="http://v3.bootcss.com/examples/dashboard/">Nav item again</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/">One more nav</a></li>
                                <li><a href="http://v3.bootcss.com/examples/dashboard/">Another nav item</a></li>
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
                                <div className="col-xs-6 col-sm-3 placeholder">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                                        <h4>Label</h4>
                                        <span className="text-muted">Something else</span>
                                </div>
                                <div className="col-xs-6 col-sm-3 placeholder">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                                        <h4>Label</h4>
                                        <span className="text-muted">Something else</span>
                                </div>
                                <div className="col-xs-6 col-sm-3 placeholder">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                                        <h4>Label</h4>
                                        <span className="text-muted">Something else</span>
                                </div>
                            </div>

                            <h2 className="sub-header">Section title</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1,001</td>
                                            <td>Lorem</td>
                                            <td>ipsum</td>
                                            <td>dolor</td>
                                            <td>sit</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
