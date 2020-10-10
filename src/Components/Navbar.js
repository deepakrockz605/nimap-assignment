import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: 'home',
    };
  }
  handleActive = (e) => {
    this.setState({
        isActive : e
    })
  };
  render() {
    return (
      <div className="main-wrapper">
        <nav>
          <div className="nav-wrapper">
            <div className="logo">Logo</div>
            <div className="sidebar">
              <ul>
                <li
                  className={this.state.isActive === 'home' ? "active" : ""}
                  onClick={() => this.handleActive("home")}
                >
                  <Link to="/home">Home</Link>
                </li>
                <li
                  className={this.state.isActive === 'task' ? "active" : ""}
                  onClick={() => this.handleActive("task")}
                >
                  <Link to="/task">Tasks</Link>
                </li>
                <li
                  className={this.state.isActive === 'user' ? "active" : ""}
                  onClick={() => this.handleActive("user")}
                >
                  <Link to="/user">User</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
