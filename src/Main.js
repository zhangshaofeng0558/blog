import React, { Component } from 'react';

class Main extends Component {
  render() {
      var blogLists=[];
      this.props.blogData.forEach(function(value,key){
          blogLists.push(
              <div className="blog-post" key={key}>
                  <h2 className="blog-post-title">{value.title}</h2>
                  <p className="blog-post-meta"> {value.time} by <a href="http://v3.bootcss.com/examples/blog/#">{value.author}</a></p>
                  <div dangerouslySetInnerHTML={{__html: value.content}} />
              </div>
          )
      });
    return (
            <div className="col-sm-8 blog-main">
                {blogLists}
                <nav>
                    <ul className="pager">
                        <li><a href="javascript:void(0)" onClick={this.props.PageClick} >Previous</a></li>
                        <li><a href="javascript:void(0)" onClick={this.props.PageClick} >Next</a></li>
                    </ul>
                </nav>
            </div>
    );
  }
}

export default Main;
