import { ApiGET } from "./axiosRequests";

const WebsocketConnect = (senderId, auth) => {
  const socket = new WebSocket(`${process.env.REACT_APP_WEBSOCKET_URL}?userId=${senderId}`);

  socket.addEventListener("open", (e) => {
    console.log("Websocket connected");
  });

  socket.addEventListener("message", (e) => {
    console.log("Message from server: ", e.data);
  });

  socket.addEventListener("close", (e) => {
    console.log("Websocket disconnected");
  });

  const sendMessage = (message) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    } else {
      console.log("Websocket is not open. Message could not be sent");
    }
  };


  return { socket, sendMessage };
};

export default WebsocketConnect;
