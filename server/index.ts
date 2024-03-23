import { createServer } from "http";
import { Server } from "socket.io";
import { setupListeners } from "./setupListeners";
import { config } from "dotenv";

config();

const PORT = process.env.PORT;

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: process.env.ALLOW_ORIGIN,
    methods: ["GET", "POST"],
  },
});

setupListeners(io);

httpServer.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});
