import React from "react";
import "./App.css";
import axios from "axios";
import { baseurl } from "./baseurl";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  signIn = event => {
    event.preventDefault();
    var uname = this.state.username;
    var pass = this.state.password;
    axios.post(`${baseurl}Admin?username=${uname}&password=${pass}`).then(
      result => {
        if (result.data != "") {
          console.log(result);
          if (
            result.data[0].Username == uname &&
            result.data[0].Password == pass
          ) {
            localStorage.setItem("session", 1);
            this.props.history.push("/main");
          } else {
            alert("Not a valid user");
          }
        } else {
          alert("Not a valid user");
        }
      },
      error => {
        console.log(error);
      }
    );
  };
  userName = event => {
    this.setState({ username: event.target.value });
  };
  passWord = event => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div className="container toppadplus signdiv">
        <form onSubmit={this.signIn}>
          <div className="form-group">
            <input
              type="text"
              className="form-control inp"
              placeholder="Username"
              value={this.state.username}
              onChange={this.userName}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control inp"
              placeholder="Password"
              value={this.state.password}
              onChange={this.passWord}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
