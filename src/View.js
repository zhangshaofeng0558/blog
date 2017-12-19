import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import BackNavBar from "./BackNavBar";
import BackSlideBar from "./BackSlideBar";

const url = "http://www.zhangshaofeng.top:8000/index.php/articles";
class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogData:{},
            content:'哈哈哈',
        };
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        //console.log(id);
        fetch(url+"/"+id)
            .then(res => res.json())
            .then(
                json => {
                     const contentState = convertFromRaw(JSON.parse(json.content));
                     const content = stateToHTML(contentState);
                     this.setState({
                         blogData:json,
                         content:content,
                     })
                })
            .catch(error => "异常处理");
    }
    render() {

        const token = sessionStorage.getItem('token');
        if(!token)return <Redirect to="/login"/>;
        return (
            <div>
                <BackNavBar/>

                <div className="container-fluid">
                    <div className="row">
                        <BackSlideBar/>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <div className="blog-post" >
                                <h2 className="blog-post-title">{this.state.blogData.title}</h2>
                                <p className="blog-post-meta"> {this.state.blogData.time} by <a href="http://v3.bootcss.com/examples/blog/#">{this.state.blogData.author}</a></p>
                                <div dangerouslySetInnerHTML={{__html: this.state.content}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default View;
