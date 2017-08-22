import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Editor,EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';


const styles = {
    editor: {
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius:4,
        cursor: 'text',
        minHeight: 200,
        padding: 5,
    },

};

class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            blogData:'',
            editorState: EditorState.createEmpty()
        };
        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({editorState});
        this.handleTitle = this.handleTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
                        blogData:json,
                    })
                })
            .catch(error => "异常处理");
    }

    handleTitle(e){
        this.setState({
            blogData:{title:e.target.value}
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let id = this.props.match.params.id;
        let token = sessionStorage.getItem('token');
        let title = this.state.blogData.title;
        let contentState = this.state.editorState.getCurrentContent();
        let content = stateToHTML(contentState);
        console.log(content);

        if(!token){
            console.log('无权限');
            return false;
        }
        if(!title){
            console.log('标题不能为空');
            return false;
        }
        if(!content){
            console.log('内容不能为空');
            return false;
        }

        fetch("http://localhost:8000/index.php/tests/"+id+"?token="+token, {
                method: "PUT",
                headers:{"Content-type":"application/x-www-form-urlencoded"},
                body: "title="+title+"&content="+content,
            })
                .then(res => {
                    //console.log(res.status);
                    if(res.status === 200){
                        return res.json();
                    }
                })
                .then(json =>{
                    this.setState({
                        id:json.id,
                    });
                }).catch(error => console.log("异常处理"));

    }

    render() {

         let token = sessionStorage.getItem('token');
         if(!token){
             return (
                 <Redirect to="/login" />
             )
         }
         let id = this.state.id;
         if(id){
            return (
                <Redirect to={"/view/"+id} />
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
                                            <input type="text" className="form-control" id="InputTitle" placeholder="Title" value={this.state.blogData.title} onChange={this.handleTitle}/>
                                        </div>
                                        <div className="form-group">
                                            <div style={styles.editor} onClick={this.focus}>
                                                <Editor ref="editor" editorState={this.state.editorState} onChange={this.onChange} placeholder="Enter some text..."/>
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

export default Update;
