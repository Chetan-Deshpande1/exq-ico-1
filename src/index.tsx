import * as React from "react";
import * as ReactDOM from "react-dom";
//import { Dapp } from "./components/Dapp";
import GeneralNav from "./components/pages/GeneralNav";
import "./index.css";
import App from "./App";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Dex from "./components/pages/Dex";
import store from "./redux/store";
import { Provider } from "react-redux";
import Main from "./components/pages/main";

// This is the entry point of application, but it just renders the Dapp
// react component. All of the logic is contained in it.

ReactDOM.render(
  <div>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/main">
              <Main />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dex">
              <Dex />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </div>,
  document.getElementById("root")
);
