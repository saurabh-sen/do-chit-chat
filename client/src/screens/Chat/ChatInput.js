import React, { useState } from "react";
import { TextEditorOptions } from "./ChatFunctions";
import EmojiPicker from "./ChatFunctions/EmojiPicker";
import { BsEmojiLaughing } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import ChatInputButtons from "./ChatFunctions/ChatInputButtons";
function ChatInput({ setCurMsg, sendMsg, setFileUploaded }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    setFileUploaded(event.target.files[0]);
  };

  return (
    <div className="TextEditor">
      <ChatInputButtons handleClick={handleClick} />
      <div className="TextBox">
        <div
          id="ho3f38hg8iy4r8"
          contentEditable={true}
          type="text"
          placeholder="hey..."
          className="ChatInput"
          onChange={(e) => setCurMsg(e.target.value)}
          //   id="mytextarea"
        ></div>

        <div className="TextBoxButtons">
          <BsEmojiLaughing
            className="EmojiOn"
            size={"1.2rem"}
            onClick={() => setShowEmoji(!showEmoji)}
          />

          <IoMdSend
            className="ChatInputSend"
            onClick={() => {
              const getContent = document.getElementById("ho3f38hg8iy4r8");
              setCurMsg(getContent.innerHTML);
              sendMsg();
            }}
            size={"1.2rem"}
          />
        </div>

        {showEmoji && <EmojiPicker setCurMsg={setCurMsg} />}
      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none", position: "absolute" }}
      />
    </div>
  );
}

export default ChatInput;
