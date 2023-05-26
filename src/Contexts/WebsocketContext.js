import React, { createContext, useContext, useEffect, useMemo } from "react";
import WebsocketConnect from "../Utils/websocketConnect";

export const WebsocketContext = createContext();

export const useWebsocket = () => useContext(WebsocketContext);

export const WebsocketProvider = ({ children, senderId, auth }) => {
  const { socket, sendMessage } = useMemo(() => {
    if (senderId) {
      return WebsocketConnect(senderId, auth);
    } else {
      return { socket: null, sendMessage: () => {} };
    }
  }, [senderId, auth]);

  useEffect(() => {
    return () => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, [socket]);

  if (!senderId) {
    return null; // Don't render anything if senderId is not defined
  }

  return (
    <WebsocketContext.Provider value={{ socket, sendMessage }}>
      {children}
    </WebsocketContext.Provider>
  );
};
