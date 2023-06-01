import React, { createContext, useContext, useEffect, useMemo } from "react";
import WebsocketConnect from "../Utils/websocketConnect";
import { useDispatch } from "react-redux";
import { customerActions } from "../Screens/Customer/CustomerSlice";

export const WebsocketContext = createContext();

export const useWebsocket = () => useContext(WebsocketContext);

export const WebsocketProvider = ({ children, senderId, auth }) => {
  const dispatch = useDispatch();
  const { socket, sendMessage } = useMemo(() => {
    if (senderId) {
      return WebsocketConnect(senderId, auth);
    } else {
      return { socket: null, sendMessage: () => {} };
    }
  }, [senderId, auth]);

  useEffect(() => {
    const handleReceivedMessage = (message) => {
      dispatch(customerActions.createNewMessage(message));
    };

    if (socket) {
      socket.addEventListener("message", (event) => {
        const message = JSON.parse(event.data);
        handleReceivedMessage(message);
      });
    }
    return () => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, [socket, dispatch]);

  if (!senderId) {
    return null; // Don't render anything if senderId is not defined
  }

  return (
    <WebsocketContext.Provider value={{ socket, sendMessage }}>
      {children}
    </WebsocketContext.Provider>
  );
};
