import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import fetch from 'node-fetch';

const url = "http://139.196.51.16:8000/index.php/articles";
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

        const text = e.target.text;
        if(text === 'Next'){
            this.state.currentPage ++;
        }else{
            this.state.currentPage --;
        }
        //console.log(this.state.currentPage);
        const currentPage = this.state.currentPage;
        fetch(url+"?expand=time&page="+currentPage)
            .then(res => {
                if(res.status === 200) return res.json();
                throw "request error";
            })
            .then(
                json => {
                    this.setState({
                        'blogData':json,
                    })
                })
            .catch(error=>"异常处理");
    }
    componentDidMount(){
         fetch(url+"?expand=time")
             .then(res => {
                 //console.log(res.status);
                 if(res.status === 200) return res.json();
                 throw "request error";
             })
             .then(
                 json => {
                     this.setState({blogData:json})
                 })
             .catch(
                 error=>{
                    console.log(error);
                    this.setState({isRequestError:1})
             });
    }

    render() {
        const error = this.state.isRequestError;
        if(error === 1){
            return (
                <Redirect to="/error"/>
            )
        }
        return (

                <div>
                    <Header />
                    <div className="container">
                        <div className="blog-header">
                            <h1 className="blog-title">The Bootstrap Autobiography</h1>
                            <p className="lead blog-description">The official example template of creating a blog with Bootstrap.</p>
                        </div>
                        <div className="row">
                            <Main blogData={this.state.blogData} PageClick={this.PageClick}/>
                            <Sidebar />
                        </div>
                    </div>
                    <Footer />
                </div>
        );
    }
}

export default App;
