import "./App.css";
import { Route } from "react-router-dom";

import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <div style={{ color: "black" }}>
      <Route path="/" exact component={GamePage} />
    </div>
  );
};

export default App;
