import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from 'react-auth-kit'

import App from "./App";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
  <AuthProvider
  authType = {'cookie'}
  authName={'_auth'}
  cookieDomain={window.location.hostname}
  cookieSecure={false}
  >
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </AuthProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
