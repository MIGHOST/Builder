import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../constants";
import { createUserLogin } from "../../redux/operations/user";

const formInitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: form.email,
      password: form.password,
    };

    dispatch(createUserLogin(userData, history));
    setForm(formInitialState);
  };
  const { email, password } = form;
  return (
    <div className={styles.sectionWrapper}>
      <section className={styles.loginWrapper}>
        <p className={styles.sign}>Resume Builder</p>
        <h1 className={styles.loginCaption}>Log In</h1>
        <form className={styles.loginForm} onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="E-mail"
            className={styles.loginInput}
            onChange={inputHandler}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            className={styles.loginInput}
            onChange={inputHandler}
          />
          <p className={styles.error}>{user.error && user.error.message}</p>
          <button type="submit" className={styles.submitBtn}>
            Log In
          </button>
        </form>
        <p className={styles.register}>
          In case you don't have your account yet, please{" "}
          <Link to={paths.registration} className={styles.registerLink}>
            register.
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
