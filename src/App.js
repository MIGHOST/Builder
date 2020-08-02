import React from "react";
import { Switch, Route } from "react-router-dom";
import { paths } from "./constants";
import Registration from "./Containers/Registration/Registration";
import Login from "./Containers/Login/Login";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Editor from "./Containers/Editor/Editor";
import Templates from "./Containers/Templates/Templates";
import Header from "./Components/Header/Header";
import "./App.css";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Document1 from "./Components/PdfDocuments/Document1";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const resume = useSelector((state) => state.resume);
  

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={paths.registration} component={Registration} />
        <Route path={paths.login} component={Login} />
        <Route path={paths.dashboard} component={Dashboard} />
        <Route path={paths.editor} component={Editor} />
        <Route path={paths.templates} component={Templates} />
      </Switch>

  
      <PDFViewer width="1500" height="1500">
        <Document1 resume={resume}/>
      </PDFViewer>
    </div>
  );
}

export default App;
