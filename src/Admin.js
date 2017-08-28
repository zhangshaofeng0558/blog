import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import List from './List';
import BackNavBar from "./BackNavBar";
import BackSlideBar from "./BackSlideBar";
const url = "http://106.14.113.101:8000/index.php/articles";
class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage:1,
            blogList:[],
        };
        this.pageClick = this.pageClick.bind(this);
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

    pageClick(e) {
        e.preventDefault();
        const text = e.target.text;
        let page = (text === 'Next') ? ++this.state.currentPage : --this.state.currentPage;
        fetch(url+"?page="+page)
            .then(res => res.json())
            .then(
                json => {
                    this.setState({
                        blogList:json,
                    })
                })
            .catch(error=>"异常处理");
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
                            <Link to="/create"><h4>创建</h4></Link>
                            <List blogList={this.state.blogList} handleDelete = {this.handleDelete}/>
                            <nav>
                                <ul className="pager" style={{textAlign:"center"}}>
                                    <li><Link to="" onClick={this.pageClick}>Previous</Link></li>
                                    <li><Link to="" onClick={this.pageClick}>Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
