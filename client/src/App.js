import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Game from "./components/Game";
import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <div style={{ color: "black" }}>
      <Route path="/play" exact component={Game} />
      <Route path="/game" exact component={GamePage} />

      <Route path="/" exact component={Homepage} />
    </div>
  );
};

export default App;
