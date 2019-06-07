import React, { Component } from "react";
import PropTypes from "prop-types";
import Message from "./Message.jsx";
import Notification from "./Notification.jsx";

/* MessageList component is the main message board that takes the message component, maps them and returns 
the message in regular font, while notifications are italic */

export default class MessageList extends Component {
  render() {
    const messageItems = this.props.messages.map(message => {
      if (message.type === "postNotification") {
        return <Notification content={message.content} />;
      } else if (message.type === "incomingMessage") {
        return (
          <Message
            key={message.id}
            currentUser={message.username}
            color={message.color}
            content={message.content}
          />
        );
      }
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
  color: PropTypes.string
};
