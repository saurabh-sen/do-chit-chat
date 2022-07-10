import React from "react";

function ChatRoom({ socket, setRoomId, Name, setName, RoomId, setShowChat }) {
  const JoinRoom = () => {
    if (RoomId.trim() !== "") {
      socket.emit("join_room", RoomId);
      setShowChat(true);
    }
  };
  return (
    <div className="ChatRoomPage">
      <div className="ChatRoomHeader">
        Welcome Back, {localStorage.getItem("user")}
        <h6>Join or Create a room & start chatting!!</h6>
      </div>
      <div className="JoinRoomForm">
        <input
          className="ChatRoomInput"
          placeholder="#RoomId..."
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button className="ButtonJoinRoom" onClick={() => JoinRoom()}>
          Join{" "}
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
