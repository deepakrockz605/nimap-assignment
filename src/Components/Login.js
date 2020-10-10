import React, { Component } from "react";
import { loginUtil } from "./Util";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: {},
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  valid() {
    if (this.state.username === "" && this.state.password === "") {
      this.setState({
        userError: "Username can not be empty!!",
        passError: "Password can not be empty!!",
      });
    } else if (this.state.username=== "") {
      this.setState({ userError: "Invalid Username" });
    } else if (this.state.password === "") {
      this.setState({ passError: "Password can not be empty!!" });
    } else {
      if (this.state.username !== "deepakPawar") {
        this.setState({ userError: "Incorrect Email" });
      } else if (this.state.password !== "deepak123") {
        this.setState({
          passError: "Incorrect Password !!",
        });
      } else {
        return true;
      }
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ userError: "", passError: "" });
    if (this.valid()) {
      loginUtil();
      this.props.history.push('/task')
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <i className="material-icons right">https</i>
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form onSubmit={this.handleLogin}>
              <div className="input-field col s6">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className=""
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  autoComplete="off"
                />
                <label htmlFor="username" className="">
                  Username
                </label>
                <span className="fieldError">{this.state.userError}</span>
              </div>

              <div className="input-field col s6">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className=""
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  autoComplete="off"
                />
                <label htmlFor="password" className="">
                  Password
                </label>
                <span className="fieldError">{this.state.passError}</span>
              </div>

              <div className="d-flex justify-content-center mt-3 login_container">
                <button
                  type="submit"
                  name="button"
                  className="btn waves-effect waves-light login_btn"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
