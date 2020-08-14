import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./EmploymentHistory.module.css";
import EmploymentHistoryItem from "../EmploymentHistoryItem/EmploymentHistoryItem";
import { addPosition } from "../../redux/actions/employmentHistory";
import moment from "moment";
import AddButton from "../AddButton/AddButton";

const EmploymentHistory = () => {
  const employmentHistory = useSelector(
    (state) => state.resume.employmentHistory
  );
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const addNewEmplyment = () => {
    const newEmployment = {
      jobTitle: "",
      employer: "",
      start: moment()._d,
      end: moment()._d,
      city: "",
      description: "",
    };

    dispatch(addPosition(newEmployment));
  };

  return (
    <div className={styles.container}>
      <h2
        className={
          theme === "dark"
            ? `${styles.EmploymentHistory_Title} ${styles.EmploymentHistory_Title_Dark}`
            : styles.EmploymentHistory_Title
        }
      >
        Employment History
      </h2>
      {employmentHistory.map((emHis, index) => (
        <EmploymentHistoryItem key={index} emHistory={emHis} index={index} />
      ))}
      <AddButton onClick={addNewEmplyment} title={"Position"} />
    </div>
  );
};

export default EmploymentHistory;
