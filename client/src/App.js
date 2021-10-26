import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Game from "./components/Game";
import GamePage from "./pages/GamePage";
import UItest from "./pages/UItest";
import Hand from "./pages/hand";

const App = () => {
  return (
    <div style={{ color: "black" }}>
      <Route path="/play" exact component={Game} />
      <Route path="/game" exact component={GamePage} />
      <Route path="/ui" exact component={UItest} />
      <Route path="/hand" exact component={Hand} />
      <Route path="/" exact component={Homepage} />
    </div>
  );
};

export default App;
