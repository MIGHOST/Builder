import React from "react";
import LanguageItem from "./LanguageItem/LanguageItem";
import styles from "./Languages.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addLanguage } from "../../redux/actions/languages";
import AddButton from "../AddButton/AddButton";

const Languages = () => {
  const languages = useSelector(state => state.resume.languages);
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const addNewLanguage = () => {
    dispatch(addLanguage());
  };
  return (
    <div className={styles.wrapper}>
      <div className={theme === "dark" ? styles.title_dark : styles.title}>
        Languages
      </div>
      {languages.map((languageItem, index) => (
        <LanguageItem
          language={languageItem.language}
          level={languageItem.level}
          index={index}
          key={index}
        />
      ))}

      <AddButton onClick={addNewLanguage} title={"Language"} />
    </div>
  );
};

export default Languages;
