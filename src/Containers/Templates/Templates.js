import React, { Fragment, useState } from "react";
import styles from "./Templates.module.css";
import { paths } from "../../constants";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelect } from "react-redux";
import { changeType } from "../../redux/actions/basicInfo";
import Template_1 from "../../Components/Template_1/Tempate_1";
import Template_2 from "../../Components/ResumeTemplate2/ResumeTemplate2";
const Templates = () => {
  const path = useRouteMatch().path;
  const dispatch = useDispatch();
  const changeNumber = (number) => {
    dispatch(changeType(number));
  };

  return (
    <Fragment>
      <div className={styles.LinkWrapper}>
        <NavLink
          to={paths.editor}
          className={styles.LinkNewResume}
          onClick={() => changeNumber(1)}
        />
        <NavLink
          to={`${path}`}
          className={styles.Link}
          activeClassName={styles.ActiveLink}
          onClick={() => changeNumber(1)}
        >
          Resume v.1
        </NavLink>
        <NavLink
          to={paths.editor}
          className={styles.LinkNewResume}
          onClick={() => changeNumber(2)}
        />
        <NavLink
          to={`${path}/2`}
          className={styles.Link}
          activeClassName={styles.ActiveLink}
          onClick={() => changeNumber(2)}
        >
          Resume v.2
        </NavLink>
      </div>

      <Switch>
        <Route exact path={`${path}`} component={Template_1} />
        <Route path={`${path}/2`} component={Template_2} />
      </Switch>
    </Fragment>
  );
};

export default Templates;
