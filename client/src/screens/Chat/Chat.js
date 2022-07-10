import React, { useEffect, useState } from "react";
import ChatInput from "./ChatInput";
import { MdOutlineContentCopy } from "react-icons/md";
function ChatComponent({ socket, Name, RoomId }) {
  const [curMsg, setCurMsg] = useState("");
  const [fileUploaded, setFileUploaded] = useState();
  const [messageList, setMessageList] = useState([]);
  const [imgSrc, setImgSrc] = useState();
  const sendMsg = async () => {
    var messageData = {};
    if (fileUploaded) {
      messageData = {
        RoomId,
        Name: localStorage.getItem("user"),
        curMsg: fileUploaded,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
        isMine: false,
        isFile: true,
      };
    } else {
      console.log(
        { curMsg },
        new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes()
      );
      if (curMsg.trim() === "") return;
      messageData = {
        RoomId,
        Name: localStorage.getItem("user"),
        curMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
        isMine: false,
        isFile: false,
      };
    }
    await socket.emit("send_message", messageData);
    setMessageList((prev) => [...prev, { ...messageData, isMine: true }]);

    setCurMsg("");
    setFileUploaded();
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log({ data });
      setMessageList((prev) => [...prev, data]);
    });
    var messageBody = document.querySelector("#messageBody");
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }, [socket]);

  const Image = ({ blob }) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      setImgSrc(reader.result);
    };
    return <img style={{ width: 150, height: "auto" }} src={imgSrc} />;
  };
  const renderMessage = (message) => {
    if (message.isFile) {
      const blob = new Blob([message.curMsg], { type: "file" });
      return <Image blob={blob} />;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: message.curMsg }} />;
    }
  };
  return (
    <div className="ChatComponent">
      <div
        onClick={() => {
          navigator.clipboard.writeText(RoomId);
        }}
        className="RoomIdCopy"
      >
        <MdOutlineContentCopy size={"1rem"} />
        Click to Copy RoomId
      </div>
      <div className="ChatBox" id="messageBody">
        {messageList.map((message, key) => (
          <>
            {!message.isMine ? (
              <div key={key} className="MessageBox">
                {renderMessage(message)}
                <div className="MessageBoxSender">~{message.Name}</div>
                <div className="MessageBoxTime">{message.time}</div>
              </div>
            ) : (
              <div key={key} className="MessageBoxSent">
                {renderMessage(message)}
                <div className="MessageBoxSenderSent">~you</div>
                <div className="MessageBoxTimeSent">{message.time}</div>
              </div>
            )}
          </>
        ))}
      </div>

      <ChatInput
        sendMsg={sendMsg}
        setCurMsg={setCurMsg}
        setFileUploaded={setFileUploaded}
      />
    </div>
  );
}

export default ChatComponent;
