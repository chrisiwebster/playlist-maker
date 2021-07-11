import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={"/playlist-maker"}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
