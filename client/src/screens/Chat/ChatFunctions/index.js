import {
  FaBold,
  FaCode,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRegFileCode,
  FaStrikethrough,
  FaUpload,
} from "react-icons/fa";
export const TextEditorOptions = [
  { title: "bold", icon: <FaBold /> },
  { title: "italic", icon: <FaItalic /> },
  { title: "strikeThrough", icon: <FaStrikethrough /> },
  { title: "createLink", icon: <FaLink /> },
  { title: "insertUnorderedList", icon: <FaListUl /> },
  { title: "insertOrderedList", icon: <FaListOl /> },
  { title: "formatBlock", icon: <FaQuoteLeft /> },
  { title: "codeSnippet", icon: <FaCode /> },
  { title: "codeBlock", icon: <FaRegFileCode /> },
  { title: "insertImage", icon: <FaUpload /> },
];
