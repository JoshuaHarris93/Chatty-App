import React, { Component } from "react";

// Appends message-like notification that differs from regular messages visually (italics)
export default class Notification extends Component {
  render() {
    return <div className="message system">{this.props.content}</div>;
  }
}
