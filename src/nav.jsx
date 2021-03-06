import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          Chatty
        </a>

        <div>{this.props.onlineUsers} users online </div>
      </nav>
    );
  }
}
