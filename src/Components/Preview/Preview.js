import React from "react";
import styles from "./Preview.module.css";
import PreviewT1 from "./PreviewT1/PreviewT1";
import PreviewT2 from "./PreviewT2/PreviewT2";
import { useSelector } from "react-redux";

import { PDFDownloadLink } from "@react-pdf/renderer";
import Document1 from "../../Components/PdfDocuments/Document1";

const Preview = () => {
  const resume = useSelector((state) => state.resume);
  const type = useSelector((state) => state.resume.basicInfo.type);
  return (
    <div className={styles.container}>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.previewCaption}>Preview</h2>

        <div>
          <PDFDownloadLink
            document={<Document1 resume={resume} />}
            fileName="resume.pdf"
          >
            <button type="button" className={styles.download}>
              Download
            </button>
          </PDFDownloadLink>
        </div>
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
