import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { tokenStorage } from "../store/stroage";
import { refresh_tokens } from "./apiIntersepter";
import { SOCKET_URL } from "./config";

interface WSService {
  initializeSocket: () => void;
  emit: (event: string, data?: any) => void;
  on: (event: string, cb: (data: any) => void) => void;
  off: (event: string) => void;
  removeListener: (listenerName: string) => void;
  updateAccessToken: () => void;
  disconnect: () => void;
}

const WSContext = createContext<WSService | undefined>(undefined);

export const WSProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socketAccessToken, setSocketAccessToken] = useState<string | null>(
    null
  );
  const socket = useRef<Socket | null>(null);
  useEffect(() => {
    const token = tokenStorage.getString("access_token") as any;
    setSocketAccessToken(token);
  }, []);

  useEffect(() => {
    if (socketAccessToken) {
      if (socket.current) {
        socket.current.disconnect();
      }

      socket.current = io(SOCKET_URL, {
        transports: ["websocket"],
        withCredentials: true,
        extraHeaders: {
          access_token: socketAccessToken || "",
        },
      });

      socket.current.on("Connect_error", (error) => {
        if (error.message === "Authentication error") {
          console.log("Auth connection error:", error.message);
          refresh_tokens();
        }
      });
    }
    return () => {
      socket.current?.disconnect();
    };
  }, [socketAccessToken]);

//   send data to tha server
  const emit = (event: string, data: any = {}) => {
    socket.current?.emit(event, data);
  };
// read the data from the server
  const on = (event: string, cd: (data: any) => void) => {
    socket.current?.on(event, cd);
  };
// remove event listener 
  const off = (event: string) => {
    socket?.current?.off(event);
  };

// Other method to remove listener
  const removeListener = (listenerName: string) => {
    socket?.current?.removeListener(listenerName);
  };
//  shut dwon the socket
  const disconnect = () => {
    if (socket.current) {
      socket.current.disconnect();
      // socket.current = undefined;
    }
  };

//   update the token
  const updateAccessToken = () => {
    const token = tokenStorage.getString("access_token") as any;
    setSocketAccessToken(token);
  };


  const socketService: WSService ={
    initializeSocket:()=>{},
    emit,
    off,
    on,
    disconnect,
    removeListener,
    updateAccessToken
  }

  return <WSContext.Provider value={socketService}>{children}</WSContext.Provider>;
};


export const useWs =():WSService=>{
    const socketService = useContext(WSContext);
    if(!socketService){
        throw new Error("useWs must be used within a WSProvider")
    }
    return socketService
}