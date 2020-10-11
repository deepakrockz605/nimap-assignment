import React, { Component } from "react";
import { logoutUtil } from "./Util";
import { connect } from "react-redux";
import { newPasswordDetails } from "../Actions";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: this.props.state.password,
      isDisable: true,
      btnValue: "Change Password",
      passError: "",
    };
  }

  handlePassword = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangePassword = (e) => {
    if (this.state.btnValue === "Change Password") {
      this.setState({
        isDisable: false,
        password: "",
        btnValue: "Save Password",
      });
    } else {
      if (this.state.password === "") {
        this.setState({
          passError: "Password Cannot be empty!!",
        });
      } else {
        this.props.newPasswordDetails(this.state.password)
        this.setState({
          isDisable: true,
          btnValue: "Change Password",
          passError: "",
        });
      }
    }
  };

  handleLogout = () => {
    logoutUtil();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="new-user">
        <div className="user-cards">
          <label>Username : </label>
          <input
            type="text"
            value="deepakPawar"
            className="no-border"
            disabled
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handlePassword}
            className={this.state.isDisable ? "no-border" : "border-focus"}
            disabled={this.state.isDisable}
          />
        </div>
        <span className="fieldError">{this.state.passError}</span>
        <div className="user-buttons">
          <button
            value={this.state.btnValue}
            onClick={this.handleChangePassword}
          >
            {this.state.btnValue}
          </button>
          <button className="ml20" onClick={this.handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newPasswordDetails: (data) => {
      dispatch(newPasswordDetails(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
