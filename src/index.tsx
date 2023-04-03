import { createRoot } from "react-dom/client";
import App from "./App";

import { io } from 'socket.io-client';
const socket = io('http://localhost:4000');

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

