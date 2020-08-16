import React from "react";
import styles from "./DashboardItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteResumeFromDatabase } from "../../redux/operations/resumeCollection";
import { useHistory } from "react-router-dom";
import { paths, UPDATE_RESUME } from "../../constants";
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Document1 from "../PdfDocuments/Document1";
import Document2 from "../PdfDocuments/Document2";

const DashboardItemV2 = (prop) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const collectionName = user.uid;
  const history = useHistory();
  const resumeCollections = useSelector((state) => state.resumeCollection);

  const deleteDocument = () => {
    dispatch(deleteResumeFromDatabase(collectionName, prop.id));
  };

  const edit = () => {
    history.push(`${paths.editor}?id=${prop.id}`);

    const res = resumeCollections.find((doc) => doc.id === prop.id);

    dispatch({ type: UPDATE_RESUME, payload: res });
  };

  function typeOfPDF (type) {
    if(type === 1) {
      return [<Document1 resume={prop}/>]
    }
    return [<Document2 resume={prop}/>]
  };

  const generatePdfDocument = async () => {
    const blob = await pdf(typeOfPDF(prop.basicInfo.type)).toBlob();
    saveAs(blob, "resume.pdf");
};

  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeName}>{prop.basicInfo.title}</div>
      <div className={styles.resume}>
        <img src="/icons/resv2.png" alt="resume" />
      </div>
      <div className={styles.buttonBlock}>
        <button className={styles.button} onClick={generatePdfDocument}>
          <img
            src="/icons/Dowload.svg"
            className={styles.buttonSvg}
            alt="download resume"
          />
          Download
        </button>
        <button className={styles.button} onClick={edit}>
          <img
            src="/icons/Edit.svg"
            className={styles.buttonSvg}
            alt="edit resume"
          />
          Edit
        </button>
        <button className={styles.button} onClick={deleteDocument}>
          <img
            src="/icons/Delete.svg"
            className={styles.buttonSvg}
            alt="delete resume"
          />
          Delete
        </button>
      </div>
    </div>
  );
};

export default DashboardItemV2;
