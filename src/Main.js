import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

class Main extends Component {
  render() {
      const blogLists=[];
      this.props.blogData.forEach(function(value,key){
          const contentState = convertFromRaw(JSON.parse(value.content));
          const content = stateToHTML(contentState);

          //console.log(date);
          blogLists.push(
              <div className="blog-post" key={key}>
                  <h2 className="blog-post-title">{value.title}</h2>
                  <p className="blog-post-meta"> {value.time} by <a href="http://v3.bootcss.com/examples/blog/#">{value.author}</a></p>
                  <div dangerouslySetInnerHTML={{__html: content}} />
              </div>
          )
      });
    return (
            <div className="col-sm-8 blog-main">
                {blogLists}
                <nav>
                    <ul className="pager">
                        <li><Link to="" onClick={this.props.PageClick}>Previous</Link></li>
                            <li><Link to="" onClick={this.props.PageClick}>Next</Link></li>

                    </ul>
                </nav>
            </div>
    );
  }
}

export default Main;
