import React from "react";
import styles from "./Preview.module.css";
import PreviewT1 from "./PreviewT1/PreviewT1";
import PreviewT2 from "./PreviewT2/PreviewT2";
import { useSelector } from "react-redux";
const Preview = () => {
  const type = useSelector((state) => state.resume.basicInfo.type);
  return (
    <div className={styles.container}>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.previewCaption}>Preview</h2>
        <button type="button" className={styles.download}>
          Download
        </button>
      </div>
      {type === 1 ? <PreviewT1 /> : <PreviewT2 />}

      <div className={styles.saveWrapper}>
        <p className={styles.select}>Select Template</p>
        <button className={styles.saveBtn}>Save</button>
      </div>
    </div>
  );
};

export default Preview;
