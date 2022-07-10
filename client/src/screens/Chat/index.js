import React, { useState } from "react";
import io from "socket.io-client";
import ChatComponent from "./Chat";
import ChatRoom from "./ChatRoom";
import "./Chat.css";
const socket = io.connect("http://localhost:9000");
function Chat() {
  const [Name, setName] = useState("");
  const [RoomId, setRoomId] = useState("");
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="ChatRoomPage">
      {!showChat ? (
        <ChatRoom
          socket={socket}
          setRoomId={setRoomId}
          Name={Name}
          setName={setName}
          RoomId={RoomId}
          setShowChat={setShowChat}
        />
      ) : (
        <ChatComponent socket={socket} RoomId={RoomId} Name={Name} />
      )}
    </div>
  );
}

export default Chat;
