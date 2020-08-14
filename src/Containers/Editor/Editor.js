import React from "react";
import { useSelector } from "react-redux";
import styles from "./Editor.module.css";
import EditorConstructor from "../EditorConstructor/EditorConstructor";
import Preview from "../../Components/Preview/Preview";
const Editor = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={
        theme === "dark"
          ? `${styles.editorWrapper} ${styles.BackgroundDark}`
          : styles.editorWrapper
      }
    >
      <EditorConstructor />
      <Preview />
    </div>
  );
};

export default Editor;
