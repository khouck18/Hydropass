const WebsocketConnect = (senderId, auth) => {
  const socket = new WebSocket(
    `${process.env.REACT_APP_WEBSOCKET_URL}?userId=${senderId}`
  );

  socket.addEventListener("open", (e) => {
    // eslint-disable-next-line no-console
    console.log("Websocket connected");
  });

  socket.addEventListener("close", (e) => {
    // eslint-disable-next-line no-console
    console.log("Websocket disconnected");
  });

  const sendMessage = (message) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    } else {
      // eslint-disable-next-line no-console
      console.log("Websocket is not open. Message could not be sent");
    }
  };

  return { socket, sendMessage };
};

export default WebsocketConnect;
