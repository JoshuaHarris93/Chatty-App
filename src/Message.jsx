import React, {Component} from 'react';


class Message extends Component {
    render() {
      return (
        <div className="message">
            <li className="message-content">{this.props.currentUser} - {this.props.content}</li>
        </div>
      );
    }
  }

  export default Message;


