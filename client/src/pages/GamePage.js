import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ButtonGroup } from "@mui/material";

import {
  selectP1Hand,
  selectP2Hand,
  selectTurn,
} from "../store/gameState/selectors";

const GamePage = () => {
  const p1Hand = useSelector(selectP1Hand);
  const p2Hand = useSelector(selectP2Hand);
  const [p1Turn, setP1MyTurn] = useState(false);
  const [p2Turn, setP2MyTurn] = useState(false);
  const turn = useSelector(selectTurn);

  const [p1CardSelected, setP1CardSelected] = useState("");
  const [p2CardSelected, setP2CardSelected] = useState("");

  return (
    // <div>Hi</div>

    <div
      style={{
        backgroundImage: `url("")`,
      }}
    >
      <div>
        Player 1 cards:
        <div>
          <div>
            {p1Hand.map((card) => (
              <button
                className="game-button green"
                value={card}
                onClick={() => {
                  setP1CardSelected(card);
                }}
              >{`${card}`}</button>
            ))}
          </div>
        </div>
        Player 2 cards:
        <div>
          <div>
            {p2Hand.map((card) => (
              <button
                className="game-button orange"
                value={card}
                onClick={() => {
                  setP2CardSelected(card);
                }}
              >
                {`${card}`}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2>Turn: {`${turn}`} </h2>
      </div>
      <div>
        <h2>Card selected By Player 1: {`${p1CardSelected}`} </h2>
      </div>
      <div>
        <h2>Card selected By Player 2: {`${p2CardSelected}`} </h2>
      </div>
    </div>
  );
};

export default GamePage;
