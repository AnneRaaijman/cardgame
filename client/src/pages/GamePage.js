import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./game.css";
import fighter from "../images/Fighters/1.jpeg";
import { fighters } from "../images/Fighters/fighters";

import {
  selectP1Hand,
  selectP2Hand,
  selectTurn,
  selectTurnState,
  selectGameState,
} from "../store/gameState/selectors";

import {
  initialize,
  player1draw,
  player1Turn,
} from "../store/gameState/actions";

const GamePage = () => {
  const dispatch = useDispatch();

  const p1Hand = useSelector(selectP1Hand);
  const p2Hand = useSelector(selectP2Hand);
  const gameState = useSelector(selectGameState);

  const [p1Turn, setP1MyTurn] = useState(false);
  const [p2Turn, setP2MyTurn] = useState(false);
  const [p1CardSelected, setP1CardSelected] = useState(null);
  const [p2CardSelected, setP2CardSelected] = useState(null);
  const [p1CardValue, setP1CardValue] = useState();
  const [p2CardValue, setP2CardValue] = useState();
  const [fight, setFight] = useState(false);
  const [p1Score, setP1Score] = useState(0); //need to integrate with redux state
  const [p2Score, setP2Score] = useState(0); //need to integrate with redux state
  const [fighterImages, setFighterImages] = useState([]);

  const turn = useSelector(selectTurn);
  const turnState = useSelector(selectTurnState);
  const card_ix = p1CardSelected;

  let x = 0;
  const imgIndex = x++;

  console.log(turnState);

  useEffect(() => {
    const randomized = shuffle(fighters);
    setFighterImages(randomized);
  }, []);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const startFight = () => {
    setFight(true);

    p1CardValue > p2CardValue
      ? setP1Score(p1Score + 1)
      : p1CardValue == p2CardValue
      ? setP2Score(p1Score + 1) && setP2Score(p2Score + 1)
      : setP2Score(p2Score + 1);
  };

  //turnStates: "initializing, player1_turn_draw, player1_turn, player2_turn_draw, player2_turn, resolve"

  if (turnState === "initializing") dispatch(initialize());

  if (turnState === "player1_turn_draw") dispatch(player1draw());

  // if (turnState === "player1_turn") dispatch(player1Turn(card_ix, playerId));

  console.log(fight);

  return (
    <div>
      <div>
        <div className="handP1">
          {p1Hand.map((card, ix) => {
            return (
              <div
                className={ix === p1CardSelected ? "card-selected" : "card"}
                value={card}
                onClick={() => {
                  setP1CardSelected(ix);
                  setP1CardValue(card);
                }}
              >
                <div className="valueP1"> {`${card}`}</div>
                <img className="card-image" src={fighterImages[ix]}></img>
              </div>
            );
          })}
        </div>
        <button className="P1button"> Finish the Turn</button>
      </div>

      {p1CardSelected && !fight ? (
        <div className="P1face-down"></div>
      ) : !fight ? null : (
        <div className="P1card-table">
          <div className="valueP1"> {`${p1CardValue}`} </div>
          <div className="card-image"></div>
        </div>
      )}

      {p2CardSelected && !fight ? (
        <div className="P2face-down"></div>
      ) : !fight ? null : (
        <div className="P2card-table">
          <div className="valueP2"> {`${p2CardValue}`} </div>
          <div className="card-image"></div>
        </div>
      )}

      <div>
        <div className="handP2">
          {p2Hand.map((card, ix) => (
            <div
              className={ix === p2CardSelected ? "card-selected" : "card"}
              value={card}
              onClick={() => {
                setP2CardSelected(ix);
                setP2CardValue(card);
              }}
            >
              <div className="valueP2"> {`${card}`}</div>
              <img
                className="card-image"
                alt="figthers"
                src={fighterImages[fighterImages.length - 1 - ix]}
              ></img>
            </div>
          ))}
        </div>
        <button className="P2button" onClick={startFight}>
          {" "}
          Finish the Turn{" "}
        </button>
      </div>
      <div className="score">
        <h2 className="points">Points</h2>
        <h2 className="P1title">Player 1</h2>
        <h2 className="P2title">Player 2</h2>
        <h2 className="P1score">{`${p1Score}`}</h2>
        <h2 className="P2score">{`${p2Score}`}</h2>
        <h2 className="x">VS</h2>
      </div>
    </div>
  );
};

export default GamePage;
