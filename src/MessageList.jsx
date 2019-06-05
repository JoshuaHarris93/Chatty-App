import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

export default class MessageList extends Component {

    
    render() {
    const messageItems = this.props.messages.map((message) => {
        return (
            <Message key={message.id} currentUser={message.username} content={message.content}/>
        );
    });

      return (
        <main className="messages">
                <ul>{messageItems}</ul>
                
        </main>
      );
  }
}

MessageList.propTypes = {
    messages: PropTypes.array,
  }; 
