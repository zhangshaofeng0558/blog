import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import fetch from 'node-fetch';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'currentPage':1,
            'blogData':[]
        };
    }

    PageClick(para,e) {
        let text = e.target.text;
        console.log(para);
        if(text === 'Next'){
            para ++;
        }else{
            para --;
        }
        switch (para){
            case 2:
                this.setState({
                    'currentPage':2,
                    'blogData':[
                        {
                            'id':'2',
                            'title':'Another blog post',
                            'author':'Jacob',
                            'content':"<p>Cum sociis natoque penatibus et magnis <a href=\"http://v3.bootcss.com/examples/blog/#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p> " +
                            "<blockquote> <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> </blockquote> " +
                            "<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p> " +
                            "<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>",
                            'time':'December 23, 2013',
                        },
                    ]
                });
                break;
            case 3:
                this.setState({
                    'currentPage':3,
                    'blogData': [
                        {
                            'id': '3',
                            'title': 'New feature',
                            'author': 'Chris',
                            'content': "<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> " +
                            "<ul> " +
                            "<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li> " +
                            "<li>Donec id elit non mi porta gravida at eget metus.</li> " +
                            "<li>Nulla vitae elit libero, a pharetra augue.</li> " +
                            "</ul> " +
                            "<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p> " +
                            "<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>",
                            'time': 'December 14, 2013',
                        },
                    ]
                } );
                break;
            default:
                this.setState({
                    'currentPage':1,
                    'blogData': [
                        {
                            'id':'1',
                            'title':'Sample blog post',
                            'author':'Mark',
                            'content':"<p>This blog post shows a few different types of content that\'s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p> <hr />"+
                            "<p>Cum sociis natoque penatibus et magnis <a href=\"http://v3.bootcss.com/examples/blog/#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>" +
                            "<blockquote> <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> </blockquote>" +
                            "<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>" +
                            "<h2>Heading</h2>" +
                            "<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p> " +
                            "<h3>Sub-heading</h3>" +
                            "<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>" +
                            "<pre><code>Example code block</code></pre>" +
                            "<p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p> " +
                            "<h3>Sub-heading</h3> " +
                            "<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> " +
                            "<ul> " +
                            "<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li> " +
                            "<li>Donec id elit non mi porta gravida at eget metus.</li> " +
                            "<li>Nulla vitae elit libero, a pharetra augue.</li> " +
                            "</ul> " +
                            "<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p> " +
                            "<ol> " +
                            "<li>Vestibulum id ligula porta felis euismod semper.</li> " +
                            "<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li> " +
                            "<li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li> " +
                            "</ol> " +
                            "<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>",
                            'time':'January 1, 2014',
                        },
                    ]
                } );
                break;
        }
    }
    componentDidMount(){
         fetch("http://localhost:8000/index.php/tests")
             .then(res => {
                 if(res.status === 200)return res.json();
                 return ([
                     {
                         'id': '3',
                         'title': 'New feature',
                         'author': 'Chris',
                         'content': "<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> " +
                         "<ul> " +
                         "<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li> " +
                         "<li>Donec id elit non mi porta gravida at eget metus.</li> " +
                         "<li>Nulla vitae elit libero, a pharetra augue.</li> " +
                         "</ul> " +
                         "<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p> " +
                         "<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>",
                         'time': 'December 14, 2013',
                     },
                 ]);
             })
             .then(
                 json => {
                     console.log(json);
                     this.setState({
                         'blogData':json,
                     })
                 })
             .catch(error=>"异常处理");
    }

    render() {
        return (

                <div>
                    <Header />
                    <div className="container">
                        <div className="blog-header">
                            <h1 className="blog-title">The Bootstrap Blog</h1>
                            <p className="lead blog-description">The official example template of creating a blog with Bootstrap.</p>
                        </div>
                        <div className="row">
                            <Main blogData={this.state.blogData} PageClick={this.PageClick.bind(this,this.state.currentPage)}/>
                            <Sidebar />
                        </div>
                    </div>
                    <Footer />
                </div>
        );
    }
}

export default App;
