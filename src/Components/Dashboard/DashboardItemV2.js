import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import styles from "./DashboardItem.module.css";
import Document1 from "../../Components/PdfDocuments/Document1";

const DashboardItemV2 = (props) => {
  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeName}>"basicInfo.title"</div>
      <div className={styles.resume}>
        <img src="/icons/resv2.png" />
      </div>
      <div className={styles.buttonBlock}>
        <PDFDownloadLink
          document={<Document1 resume={props} />}
          fileName="resume.pdf"
        >
          <button className={styles.button}>
            <img src="/icons/Dowload.svg" className={styles.buttonSvg} />
            Download
          </button>
        </PDFDownloadLink>

        <button className={styles.button}>
          <img src="/icons/Edit.svg" className={styles.buttonSvg} />
          Edit
        </button>
        <button className={styles.button}>
          <img src="/icons/Delete.svg" className={styles.buttonSvg} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default DashboardItemV2;
