import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

//Components
import Header from "../Header";
import NavBar from "../NavBar";
import Home from "../Home";
import PlaylistView from "../PlaylistView";
import SearchWrapper from "../SearchWrapper";

//CSS
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
      <HashRouter basename={"/"}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchWrapper} />
          <Route exact path="/view-playlists" component={PlaylistView} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
