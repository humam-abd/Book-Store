/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import axios from "axios";
import { baseurl } from "./baseurl";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      role: "admin"
    };
  }
  signIn = event => {
    event.preventDefault();
    var uname = this.state.username;
    var pass = this.state.password;
    var urole = this.state.role;
    axios
      .post(`${baseurl}User?username=${uname}&password=${pass}&role=${urole}`)
      .then(
        result => {
          if (result.data != "") {
            console.log(result);
            if (
              result.data[0].Username == uname &&
              result.data[0].Password == pass
            ) {
              if (result.data[0].Role == "admin") {
                localStorage.setItem("session", 1);
                console.log(this.state.role);
                this.props.history.push("/main");
              } else if (result.data[0].Role == "user") {
                localStorage.setItem("session", 2);
                this.props.history.push("/main");
              }
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
  userChange = event => {
    this.setState({ role: event.target.value });
    // console.log(this.state.role);
  };
  render() {
    return (
      <div className="container toppadplus signdiv">
        <form onSubmit={this.signIn}>
          <div className="form-group">
          <label className="bmd-label-floating lab addcolor">
                              Username
                            </label>
            <input
              type="text"
              className="form-control inp"
              placeholder="Username"
              value={this.state.username}
              onChange={this.userName}
            />
          </div>
          <div className="form-group">
          <label className="bmd-label-floating lab addcolor">
                              Password
                            </label>
            <input
              type="password"
              className="form-control inp"
              placeholder="Password"
              value={this.state.password}
              onChange={this.passWord}
            />
          </div>
          <div className="form-group">
          <label className="bmd-label-floating lab addcolor">
                              User Type
                            </label>
            <select
              className="browser-default form-control"
              onChange={this.userChange}
              value={this.state.role}

            >
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
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
