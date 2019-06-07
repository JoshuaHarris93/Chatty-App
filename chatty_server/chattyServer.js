const express = require("express");
const SocketServer = require("ws").Server;
const uuidv4 = require("uuid/v4");

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () =>
    console.log(`Listening on ${PORT}`)
  );

// Create the WebSockets server
const wss = new SocketServer({ server });

// Create the function that allows broadcasting to multiple users simultaneously
wss.broadcast = function broadcast(message) {
  wss.clients.forEach(function each(client) {
    client.send(message);
  });
};

// Random color generator
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// updates the user count based on the number of clients with open ws channels (connections)
function updateUserCount() {
  const onlineUsers = {
    clients: wss.clients.size,
    type: "incomingUserCount",
    color: getRandomColor()
  };

  wss.broadcast(JSON.stringify(onlineUsers));
}

// on.connection runs immediately when client connect
wss.on("connection", function connection(ws) {
  console.log("Client connected");

  updateUserCount();
// on.message runs immediately when message is sent (on 'Enter')
  ws.on("message", function incoming(message) {
    const messageObject = JSON.parse(message);

    messageObject.id = uuidv4();
    console.log(message);
    if (messageObject.type === "postMessage") {
      messageObject.type = "incomingMessage";
    }

    wss.broadcast(JSON.stringify(messageObject));
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on("close", () => {
    console.log("Client disconnected");
    updateUserCount();
  });
});
