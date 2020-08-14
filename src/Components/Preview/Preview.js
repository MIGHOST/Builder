import React, { useEffect } from "react";
import styles from "./Preview.module.css";
import PreviewT1 from "./PreviewT1/PreviewT1";
import PreviewT2 from "./PreviewT2/PreviewT2";
import { useSelector, useDispatch } from "react-redux";
import { saveResumeToDatabase } from "../../redux/operations/resumeCollection";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Document1 from "../PdfDocuments/Document1";

const getStringFromLocation = (location) =>
  queryString.parse(location.search).id;

const Preview = () => {
  const type = useSelector((state) => state.resume.basicInfo.type);
  const user = useSelector((state) => state.user);
  const resume = useSelector((state) => state.resume);
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const id = getStringFromLocation(location);
  let _isMounted = false;

  useEffect(() => {
    _isMounted = true;

    return () => {
      _isMounted = false;
    };
  });

  const saveResume = () => {
    const collectionName = user.uid;

    dispatch(saveResumeToDatabase(collectionName, resume, history, id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.previewCaption}>Preview</h2>
        {_isMounted && (
          <PDFDownloadLink
            document={<Document1 resume={resume} />}
            fileName="resume.pdf"
          >
            <button type="button" className={styles.download}>
              Download
            </button>
          </PDFDownloadLink>
        )}
      </div>
      {type === 1 ? <PreviewT1 /> : <PreviewT2 />}

      <div className={styles.saveWrapper}>
        <p className={styles.select}>Select Template</p>
        <button className={styles.saveBtn} onClick={saveResume}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Preview;
