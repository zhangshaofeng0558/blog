import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Editor,EditorState,convertFromRaw,convertToRaw} from 'draft-js';
import BackNavBar from "./BackNavBar";
import BackSlideBar from "./BackSlideBar";

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
const url = "http://106.14.113.101:8000/index.php/articles";

class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            title:'',
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
        fetch(url+"/"+id)
            .then(res => res.json())
            .then(
                json => {
                    const contentState = convertFromRaw(JSON.parse(json.content));
                    //console.log(contentState);
                    this.setState({
                        title:json.title,
                        editorState:EditorState.createWithContent(contentState),
                    })
                })
            .catch(error => "异常处理");
    }

    handleTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        const token = sessionStorage.getItem('token');
        if(!token){
            console.log('无权限');
            return false;
        }
        const title = this.state.title;
        if(!title){
            console.log('标题不能为空');
            return false;
        }
        const contentState = this.state.editorState.getCurrentContent();
        const content = JSON.stringify(convertToRaw(contentState));
        //console.log(content);
        const id = this.props.match.params.id;

        fetch(url+"/"+id+"?token="+token, {
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
                })
                .catch(error => console.log("异常处理"));

    }

    render() {

         const token = sessionStorage.getItem('token');
         if(!token){
             return (
                 <Redirect to="/login" />
             )
         }

         const id = this.state.id;
         if(id){
            return (
                <Redirect to={"/view/"+id} />
            )
         }

        return (
            <div>
                <BackNavBar/>

                <div className="container-fluid">
                    <div className="row">
                       <BackSlideBar/>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <h1 className="page-header">Dashboard</h1>

                            <div className="row">
                                <div className="col-xs-6 col-sm-6">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="InputTitle">Title</label>
                                            <input type="text" className="form-control" id="InputTitle" placeholder="Title" value={this.state.title} onChange={this.handleTitle}/>
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
