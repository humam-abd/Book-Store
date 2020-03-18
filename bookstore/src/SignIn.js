import React from "react";
import "./App.css";

class Signin extends React.Component {
  signIn = event => {
    event.preventDefault();
    localStorage.setItem("session", 1);
    this.props.history.push("/main");
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
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control inp"
              placeholder="Password"
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
