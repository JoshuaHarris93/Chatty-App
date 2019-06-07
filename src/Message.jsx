import React, { Component } from "react";

// Message component appends the username (with a unique color) and message to the MessageList
export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <div>
          <span
            style={{ color: this.props.color }}
            className="message-username"
            // clientPosition={id: this.props.id}
          >
            {this.props.currentUser.name}
          </span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </div>
    );
  }
}
