require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./mongoDB");
const userRoutes = require("./routes/user");
const { Server } = require("socket.io");
const http = require("http");
connection();
app.use(express.json());
app.use(cors());
app.use("/", userRoutes);

const server = http.createServer(app);
const port = process.env.PORT || 9000;
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id + " Connected to the Server");

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("User " + socket.id + " joined the room " + data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.RoomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(socket.id + " Disconnected from the server");
  });
});
server.listen(port, () => console.log("Server listening on ", port));
