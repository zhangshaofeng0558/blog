import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
const url = "http://www.zhangshaofeng.top:8000/index.php/articles";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage:1,
            blogData:[],
            isRequestError:0,
        };
        this.PageClick = this.PageClick.bind(this);
    }
    PageClick(e) {
        e.preventDefault();
        const text = e.target.text;
        const pageCount = sessionStorage.getItem("pageCount");
        if(text === 'Next' && this.state.currentPage < pageCount ){
            this.state.currentPage ++ ;
        }else if(text === 'Previous' && this.state.currentPage >1 ){
            this.state.currentPage -- ;
        }else{
            return false;
        }
        let page = this.state.currentPage;
        fetch(url+"?expand=time&page="+page)
            .then(res => {
                if(res.status === 200) return res.json();
            })
            .then(
                json => {
                    this.setState({
                        blogData:json,
                    })
                })
            .catch(error=>"异常处理");
    }
    componentDidMount(){
         fetch(url+"?expand=time")
             .then(res => {
                 //console.log(res.status);
                 if(res.status === 200) {
                     sessionStorage.setItem("pageCount", res.headers.get('X-Pagination-Page-Count'));
                     return res.json();
                 }
             })
             .then(
                 json => {
                     this.setState({blogData:json})
                 })
             .catch(
                 error=>{
                    //console.log(error);
                    this.setState({isRequestError:1})
             });
    }

    render() {
        const error = this.state.isRequestError;
        if(error === 1) return <Redirect to="/error" />;
        const token = sessionStorage.getItem('token');
        if(!token) return <Redirect to="/login" />;
        return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="blog-header">
                            <h1 className="blog-title">My diary</h1>
                            <p className="lead blog-description">记录一段人生</p>
                        </div>
                        <div className="row">
                            <Main blogData={this.state.blogData} PageClick={this.PageClick} />
                            <Sidebar />
                        </div>
                    </div>
                    <Footer />
                </div>
        );
    }
}
export default App;
