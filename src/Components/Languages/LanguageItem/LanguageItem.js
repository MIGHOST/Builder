import React from "react";
import styles from "./LanguageItem.module.css";
import withToggle from "../../../hoc/withToggle";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteLanguage,
  updateLanguage
} from "../../../redux/actions/languages";

const LanguageItem = props => {
  const { open, toggle, language, index, level } = props;
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const deletedNewLanguage = () => {
    dispatch(deleteLanguage(index));
  };
  const editLanguage = e => {
    dispatch(updateLanguage(index, { language: e.target.value, level: level }));
  };
  const editLevel = e => {
    if (!e) {
      return dispatch(updateLanguage(index, { language: language, level: "" }));
    }
    dispatch(updateLanguage(index, { language: language, level: e.value }));
  };
  const options = [
    { value: "C2", label: "C2" },
    { value: "C1", label: "C1" },
    { value: "B2", label: "B2" },
    { value: "B1", label: "B1" },
    { value: "A1", label: "A1" },
    { value: "A2", label: "A2" },
    { value: "Native", label: "Native speaker" }
  ];

  return (
    <div className={styles.container}>
      <div className={theme === "dark" ? styles.wrapper_dark : styles.wrapper}>
        <div className={theme === "dark" ? styles.header_dark : styles.header}>
          <span
            className={
              theme === "dark" ? styles.languageName_dark : styles.languageName
            }
          >
            {language}
          </span>
          {level && "|"}
          <span
            className={
              theme === "dark"
                ? styles.languageLevel_dark
                : styles.languageLevel
            }
          >
            {level}
          </span>
        </div>
        <div className={styles.buttonSpace}>
          <div
            className={theme === "dark" ? styles.editBtn_dark : styles.editBtn}
            onClick={toggle}
          >
            Edit
          </div>
          <div
            className={
              theme === "dark" ? styles.deleteBtn_dark : styles.deleteBtn
            }
            onClick={deletedNewLanguage}
          >
            Delete
          </div>
          <div
            className={
              theme === "dark"
                ? open
                  ? styles.arrowBtn_dark
                  : styles.arrowBtnDown_dark
                : open
                ? styles.arrowBtn
                : styles.arrowBtnDown
            }
            onClick={toggle}
            value=""
          ></div>
        </div>
      </div>
      {open && (
        <form className={theme === "dark" ? styles.form_dark : styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter a language"
            onChange={editLanguage}
            value={language}
          ></input>
          <Select
            className={styles.select}
            options={options}
            isClearable
            placeholder={level}
            onChange={editLevel}
          />
        </form>
      )}
    </div>
  );
};

export default withToggle(LanguageItem);
