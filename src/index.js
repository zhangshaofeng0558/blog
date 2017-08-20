import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Login from './Login';
import Admin from './Admin';
import View from './View';
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
            </div>
        </BrowserRouter>
    ),
  document.getElementById('root')
);
