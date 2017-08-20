import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class List extends Component {
  render() {
      var blogLists=[];
      this.props.blogList.forEach(function(value,key){

          blogLists.push(
              <tr key={key}>
                  <td>{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.time}</td>
                  <td>
                      <Link to={"/view/"+value.id } >查看</Link>
                      <Link to={"/update/"+value.id }>修改</Link>
                      <Link to={"/delete/"+value.id }>删除</Link>
                      <button onClick={this.props.handleDelete}>删除</button>
                  </td>
              </tr>
          )
      });
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>标题</th>
                    <th>时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {blogLists}
                </tbody>
            </table>
            <button onClick={this.props.handleDelete}>删除</button>
            <button onClick={this.props.handleDelete}>删除</button>
        </div>
    );
  }
}

export default List;