import React, { Component } from "react";

// chatbar component covers username input box and message input box. Both are tied to event handler functions
export default class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      name: ""
    };
  }

  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  handleKeyUp = event => {
    if (event.key === "Enter") {
      this.props.addNewMessage(this.state.content);
      this.setState({ content: "" });
    }
  };

  handleNameKeyUp = event => {
    if (event.key === "Enter") {
      // need to send the content to App
      this.props.changeName(this.state.name);
    }
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Enter a username"
          value={this.state.name}
          onKeyUp={this.handleNameKeyUp}
          onChange={this.handleNameChange}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          value={this.state.content}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
      </footer>
    );
  }
}
