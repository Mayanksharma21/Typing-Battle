import { Server } from "socket.io";

export function setupListeners(io: Server) {
  io.on("connection", (socket) => {
    console.log(`New Connection with ID:- ${socket.id}`);
  });
}
