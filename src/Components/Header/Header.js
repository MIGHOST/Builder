import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { paths } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/actions/user";
import ThemeSwitcher from "./ThemeSwitcher";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { auth } from "../../configFirebase";
import storage from "../../helpers/storage";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const isUserAuth = useSelector(state => state.user);
  const logOut = () => {
    dispatch(logOutUser());
    auth.signOut();
    storage.save("user", {});
    history.push(paths.login);
  };

  const isSwitchOn = () => {
    if (
      location.pathname === paths.editor ||
      location.pathname === paths.templates ||
      location.pathname === `${paths.templates}/2`
    ) {
      return true;
    }
    return false;
  };

  return (
    <header className={styles.header}>
      <Link to={paths.dashboard}>
        <div className={styles.logo}></div>
      </Link>
      {!!Object.keys(isUserAuth).length && (
        <nav
          className={
            isSwitchOn()
              ? `${styles.headerNav} ${styles.headerNavSwitcher}`
              : styles.headerNav
          }
        >
          <ul className={styles.headerNavList}>
            <li className={styles.navItem}>
              <NavLink
                to={paths.dashboard}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Dashboard
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink
                to={paths.templates}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Templates
              </NavLink>
            </li>
            {isSwitchOn() && (
              <li className={styles.navItem}>
                <ThemeSwitcher />
              </li>
            )}

            <li
              className={
                isSwitchOn()
                  ? `${styles.headerLogOut} ${styles.headerLogOutSwitch}`
                  : styles.headerLogOut
              }
              onClick={logOut}
            >
              Log Out
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
