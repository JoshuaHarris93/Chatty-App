import React, {Component} from 'react';
// import PropTypes from 'prop-types';

export default class MessageList extends Component {
    
    
    render() {
    const messageItems = this.props.messages.map((message, id) => {
        return (
            <li className="message-content" defaultValue={this.props.currentUser}  key={id}>{message.content}</li>
        );
    });

      return (
        <main className="messages" defaultValue={this.props.messages}>
            <div className="message">
                <ul>{messageItems}</ul>
            </div>
        </main>
      );
  }
//    messageItems.propTypes = {
//     messages: PropTypes.array,
//   }; 
}

  

  

  

