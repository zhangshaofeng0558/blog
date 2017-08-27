import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import List from './List';
import BackNavBar from "./BackNavBar";
import BackSlideBar from "./BackSlideBar";
const url = "http://106.14.113.101:8000/index.php/articles";
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
        const token = sessionStorage.getItem('token');
        const id = e.target.title;
        fetch(url+"/"+id+"?token="+token,{method:"DELETE"})
            .then(res => {
                console.log(res.status);
                //return res.json();
            })
             .catch(error => "异常处理");
    }

    componentDidMount(){
        fetch(url)
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
         const token = sessionStorage.getItem('token');
         if(!token){
             return (
                 <Redirect to="/login"/>
             )
        }

        return (
            <div>
                <BackNavBar />

                <div className="container-fluid">
                    <div className="row">
                        <BackSlideBar/>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" >
                            <h2 className="sub-header">博客列表</h2>
                            <List blogList={this.state.blogList} handleDelete = {this.handleDelete}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
