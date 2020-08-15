import React from "react";
import styles from "./Templates.module.css";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeType } from "../../redux/actions/basicInfo";
import Template_1 from "../../Components/ResumeTemplate1/ResumeTemplate1";
import Template_2 from "../../Components/ResumeTemplate2/ResumeTemplate2";
import { paths } from "../../constants";
// import { set } from "date-fns";
// import { darkTheme, lightTheme } from "../../redux/actions/theme";

const Templates = ({location}) => {
  const theme = useSelector(state => state.theme);
  const isResumeOne = location.pathname === paths.templates;
  const path = useRouteMatch().path;
  const dispatch = useDispatch();
  const changeNumber = number => {
    dispatch(changeType(number));
  };

  return (
    <div
      className={
        theme === "dark" ? styles.mainWrapperDark : styles.mainWrapperLight
      }
    >
      <div className={styles.LinkWrapper}>
        <NavLink
          to={paths.editor}
          className={isResumeOne ? styles.LinkNewResumeActive : styles.LinkNewResumeNotActive}
          onClick={() => changeNumber(1)}
        />
        <NavLink
          exact
          to={`${path}`}
          className={
            theme === "dark"
              ? `${styles.LinkDarkTheme} ${styles.Link}`
              : styles.Link
          }
          activeClassName={
            theme === "dark"
              ? `${styles.ActiveLink} ${styles.ActiveLinkDark}`
              : styles.ActiveLink
          }
          onClick={() => changeNumber(1)}
        >
          Resume v.1
        </NavLink>
        <NavLink
          to={paths.editor}
          className={isResumeOne ? styles.LinkNewResumeNotActive : styles.LinkNewResumeActive}
          onClick={() => changeNumber(2)}
        />
        <NavLink
          to={`${path}/2`}
          className={
            theme === "dark"
              ? `${styles.LinkDarkTheme} ${styles.Link}`
              : styles.Link
          }
          activeClassName={
            theme === "dark"
              ? `${styles.ActiveLink} ${styles.ActiveLinkDark}`
              : styles.ActiveLink
          }
          onClick={() => changeNumber(2)}
        >
          Resume v.2
        </NavLink>
      </div>

      <Switch>
        <Route exact path={`${path}`} component={Template_1} />
        <Route path={`${path}/2`} component={Template_2} />
      </Switch>
    </div>
  );
};

export default Templates;
