import { createContext } from "react";
import { Socket } from "socket.io-client";

export const AppContext = createContext<{
    socket: Socket
    userName: string
}>(null);