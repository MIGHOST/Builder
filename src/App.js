import React, { useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { paths } from "./constants";
import Registration from "./Containers/Registration/Registration";
import Login from "./Containers/Login/Login";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Editor from "./Containers/Editor/Editor";
import Templates from "./Containers/Templates/Templates";
import Header from "./Components/Header/Header";
import storage from "./helpers/storage";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "./redux/actions/user";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let isAuth = !!Object.keys(user).length && !user.error;

  useEffect(() => {
    const user = storage.get("user");
    if (user) {
      if (!!Object.keys(user).length && !user.error) {
        dispatch(logInUser(user));
      }
    }
  }, [dispatch]);

  if (isAuth) {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path={paths.dashboard} component={Dashboard} />
          <Route path={paths.editor} component={Editor} />
          <Route path={paths.templates} component={Templates} />
          <Route path="*">
            <Redirect to={paths.dashboard}/>
          </Route>
        </Switch>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path={paths.registration} component={Registration} />
          <Route path={paths.login} component={Login} />
          <Route path="*">
            <Redirect to={paths.login}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
