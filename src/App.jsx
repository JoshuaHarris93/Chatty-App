import React, { Component } from "react";
import ChatBar from "./ChatBar.jsx";
import Message from "./Message.jsx";
import NavBar from "./Nav.jsx";
import MessageList from "./MessageList.jsx";

// Highest level component 
export default class App extends Component {
  constructor(props) {
    super(props);
//set initial state
    this.state = {
      currentUser: {
        name: "",
        color: "",
        id: ""
      },
      messages: [],
      onlineUsers: 0
    };
  }

  addNewMessage = input => {
    const newMessage = {
      username: this.state.currentUser,
      content: input,
      type: "postMessage",
      color: this.state.currentUser.color
    };
    this.socketServer.send(JSON.stringify(newMessage));
  };

  changeName = name => {
    const lCurrentUser = {
      content: `${this.state.currentUser.name} changed their name to ${name}`,
      type: "postNotification"
    };
    this.socketServer.send(JSON.stringify(lCurrentUser));
    this.setState({
      currentUser: {
        name: name,
        color: this.state.currentUser.color
      }
    });
  };

// Mounting all data (like $(document.ready) in jQuery)
  componentDidMount() {
    this.socketServer = new WebSocket("ws://localhost:3001/");

    this.socketServer.onopen = event => {
      console.log("connected to: socketServer");
     
    };

    this.socketServer.onmessage = event => {
      let data = JSON.parse(event.data);

      if (data.type === "incomingUserCount") {
        this.setState({
          onlineUsers: data.clients,
          currentUser: {
            name: this.state.currentUser.name ? this.state.currentUser.name : "anonymous " + data.clients,
            color: data.color,
            id: data.id
          }
        });
      } else {
        this.setState({ messages: [...this.state.messages, data], clientPosition: this.state.color});
      }
    };
  }
// render all child components
  render() {
    return (
      <div>
        <NavBar onlineUsers={this.state.onlineUsers} />
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser}
          addNewMessage={this.addNewMessage}
          changeName={this.changeName}
        />
      </div>
    );
  }
}
