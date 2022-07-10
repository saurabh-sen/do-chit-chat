import React, { useState } from "react";
import { TextEditorOptions } from ".";

function ChatInputButtons({ handleClick }) {
  const [isActive, setIsActive] = useState({
    bold: false,
    italic: false,
    strikeThrough: false,
  });
  return (
    <div className="TextEditorOptions">
      {TextEditorOptions.map((option, key) => (
        <button
          className="ChatRichBtn"
          key={key}
          onClick={(e) => {
            // if (
            //   option.title === "bold" ||
            //   option.title === "italic" ||
            //   option.title === "strikeThrough"
            // ) {
            //   setIsActive(!isActive);
            // }
            var linkURL = null;
            console.log(option.title);
            if (option.title === "createLink") {
              console.log("GER");
              linkURL = prompt("Enter a URL:", "http://");
            } else if (option.title === "formatBlock") {
              linkURL = "<pre>";
              console.log("BlockQuote");
            }
            if (option.title === "insertImage") handleClick();

            document.execCommand(option.title, false, linkURL);
          }}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
}

export default ChatInputButtons;
