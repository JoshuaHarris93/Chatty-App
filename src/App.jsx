import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import NavBar from './nav.jsx';
import MessageList from './MessageList.jsx';
import uuid from 'uuid';


export default class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
  }

  addNewMessage = input => {
    const newMessage = {
      username: this.state.currentUser.name,
      content: input,
      id: uuid()
    }
    this.socketServer.send(JSON.stringify(newMessage));
    // this.setState({ messages: [...this.state.messages, newMessage] });
  };

  componentDidMount() {
    this.socketServer = new WebSocket("ws://localhost:3001/");
    
    this.socketServer.onopen = event => {
      
      console.log("connected to: socketServer") 
    };

    this.socketServer.onmessage = event => {
      // let message = JSON.parse(event.data);
      // console.log(event);
    }
  }

  render() {
    return (
    <div>
      <NavBar />
      <MessageList messages={this.state.messages}/>
      <ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage}/>

    </div>
    );
  }
}

