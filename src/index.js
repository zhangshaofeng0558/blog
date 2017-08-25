import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Admin from './Admin';
import View from './View';
import Create from './Create';
import Update from './Update';
import Error from './Error';
import './blog.css';
import './dashboard.css';
import './signin.css';
ReactDOM.render(
    (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/view/:id" component={View}/>
                <Route path="/create" component={Create}/>
                <Route path="/update/:id" component={Update}/>
                <Route path="/error" component={Error}/>
            </div>
        </BrowserRouter>
    ),
  document.getElementById('root')
);
