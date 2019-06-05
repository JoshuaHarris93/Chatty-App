import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import NavBar from './nav.jsx';
import MessageList from './MessageList.jsx';

// function addMessage({ addTask }) {
//   const onSubmit = evt => {
//     evt.preventDefault();
//     const taskNameInput = evt.target.elements.taskInput;
//     addTask(taskNameInput.value);
//   };
//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="taskInput" placeholder="Write Task Name" />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

export default class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
          id: "bobID"
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
          id: "anonID"
        }
      ]
    }
  }

  addNewMessage = input => {
    const newMessage = {
      username: this.state.currentUser.name,
      content: input,
      id: '123'
    }
    this.setState({ messages: [...this.state.messages, newMessage] });
  };

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
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

