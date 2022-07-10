import React, { useState } from "react";
import Picker from "emoji-picker-react";
function EmojiPicker({ setCurMsg }) {
  //   const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    document.getElementById("ho3f38hg8iy4r8").innerHTML +=
      " " + emojiObject.emoji;
  };

  return <Picker onEmojiClick={onEmojiClick} />;
}

export default EmojiPicker;
