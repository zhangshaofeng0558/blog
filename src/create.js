import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Editor,EditorState } from 'draft-js';

const styles = {
    root: {
        fontFamily: '\'Helvetica\', sans-serif',
        padding: 20,
        width: 600,
    },
    editor: {
        border: '1px solid #ccc',
        cursor: 'text',
        minHeight: 80,
        padding: 10,
    },
    button: {
        marginTop: 10,
        textAlign: 'center',
    },
};

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.onChange = (editorState) => this.setState({editorState});
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.editorState.getCurrentContent());
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

                            <div className="row">
                                <div className="col-xs-6 col-sm-6">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="InputTitle">Title</label>
                                            <input type="text" className="form-control" id="InputTitle" placeholder="Title" />
                                        </div>
                                        <div style={styles.root}>
                                            <div style={styles.editor} >
                                                <Editor editorState={this.state.editorState} onChange={this.onChange} placeholder="Enter some text..."/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
