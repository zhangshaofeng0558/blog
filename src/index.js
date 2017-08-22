import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Admin from './Admin';
import View from './View';
import Create from './Create';
import './signin.css';
import './blog.css';
import './dashboard.css';
ReactDOM.render((
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/view/:id" component={View}/>
                <Route path="/create" component={Create}/>
            </div>
        </BrowserRouter>
    ),
  document.getElementById('root')
);
