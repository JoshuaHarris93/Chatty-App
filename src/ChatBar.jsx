import React, {Component} from 'react';
import home from '../styles/application.scss';


export default class ChatBar extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {content: ''}
    }

    handleChange = event => {
        this.setState({ content: event.target.value });
      };

    handleKeyUp = event => {
        if (event.key === 'Enter') {
          // need to send the content to App
          this.props.addNewMessage(this.state.content);
          // reset the content of the text area
          this.setState({ content: '' });
        }
      };
    
    render() {

      return (
        <footer className="chatbar">
    <input className="chatbar-username" defaultValue={this.props.currentUser.name} placeholder="Your Name (Optional)" />
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

