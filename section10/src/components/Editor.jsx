import { useState, useRef, useContext } from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef(content);
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="Add a todo"
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

export default Editor;
