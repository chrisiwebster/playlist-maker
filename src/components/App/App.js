import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Header from "../Header";
import NavBar from "../NavBar";
import Home from "../Home";
import SearchWrapper from "../SearchWrapper";

import "./App.css";

//App component
const App = () => {
  const [status, setStatus] = useState(false);

  const handleNavClick = () => {
    status === true ? setStatus(false) : setStatus(true);
  };

  return (
    <div>
      <Header title="Playlist Maker">
        <NavBar handleNavClick={handleNavClick} status={status} />
      </Header>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchWrapper} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
