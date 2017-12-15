import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
const url = "http://106.14.113.101:8000/index.php";
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            token:'',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(e){
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e){
        this.setState({password: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
       // console.log(username);
        fetch(url+"/users/login", {
            method: "POST",
            headers:{"Content-type":"application/x-www-form-urlencoded"},
            body: "username="+username+"&password="+password,
         })
             .then(res => res.json())
             .then(json =>{
                 if (json.status === 200) {
                    sessionStorage.setItem("token", json.token);
                    this.setState({token:json.token})
                 }else{
                     console.log(json.status+"异常处理");
                 }
            }).catch(error => console.log("异常处理"));

    }

    render() {
        let token = this.state.token ? this.state.token === sessionStorage.getItem("token")  : sessionStorage.getItem("token");
        if(token){
            return (
                <Redirect to="/admin"/>
            )
        }

        return (
                    <div className="container" style={{marginTop:40}} >
                        <form className="form-signin" >
                            <h2 className="form-signin-heading">Please login in</h2>
                            <label htmlFor="inputUsername" className="sr-only">Username</label>
                            <input type="email" id="inputUsername" className="form-control" placeholder="Username" value={this.state.username} onChange= {this.handleUsernameChange}/>
                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>Login</button>
                        </form>
                    </div>
        );
    }
}

export default Login;
