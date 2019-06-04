import React, {Component} from 'react';
import home from '../styles/application.scss';


export default class ChatBar extends Component {
    
      
    
    render() {
      return (
        <footer className="chatbar">
    {/* <form onSubmit={this.onCommentSubmit}> */}
    <input className="chatbar-username" defaultValue={this.props.currentUser.name} placeholder="Your Name (Optional)" />
    <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    {/* </form> */}
      </footer>
      );
    }
  }

