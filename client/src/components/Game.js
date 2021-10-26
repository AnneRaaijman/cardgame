import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { selectGameState } from "../store/gameState/selectors";
import {
  initialize,
  player1draw,
  player2draw,
  player1Turn,
  player2Turn,
  endTurnResolve,
} from "../store/gameState/actions";

let socket;
const ENDPOINT = "http://localhost:5000";
// const ENDPOINT = 'https://uno-online-multiplayer.herokuapp.com/'

const Game = (props) => {
  console.log("props", props);
  const data = queryString.parse(props.location.search);
  const gameState = useSelector(selectGameState);

  //initialize socket state
  const [room, setRoom] = useState(data.roomCode);
  const [roomFull, setRoomFull] = useState(false);

  console.log("data", data); //just the roomCode
  const dispatch = useDispatch();
  useEffect(() => {
    const connectionOptions = {
      forceNew: true,
      reconnectionAttempts: "Infinity",
      timeout: 10000,
      transports: ["websocket"],
    };
    socket = io.connect(ENDPOINT, connectionOptions);

    //this room is sent to the backend
    socket.emit("join", { room: room }, (error) => {
      if (error) setRoomFull(true);
    });

    //cleanup on component unmount
    return function cleanup() {
      socket.emit("disconnect");
      //shut down connnection instance
      socket.off();
    };
  }, []);

  //initialize game state
  const [currentColor, setCurrentColor] = useState("");

  //runs once on component mount

  return (
    <div className={`Game backgroundColorR backgroundColor${currentColor}`}>
      {!roomFull ? <h1>You joined {room}</h1> : <h1>Room full</h1>}

      <br />
      <a href="/">
        <button className="game-button red">QUIT</button>
      </a>
      <button onClick={() => dispatch(initialize())}>initialize game</button>
      <button onClick={() => dispatch(player1draw())}>player1_turn_draw</button>
      <button onClick={() => dispatch(player1Turn({ card_ix: 0, id: 1 }))}>
        p1 playcard
      </button>
      <button onClick={() => dispatch(player2draw())}>player2_turn_draw</button>
      <button onClick={() => dispatch(player2Turn({ cardP2_ix: 0, id: 2 }))}>
        p2 playcard
      </button>
      <button onClick={() => dispatch(endTurnResolve())}>end turn </button>

      <div>
        <div>
          <p>Deck</p>
          {gameState.deck.map((val) => (
            <span>{val} </span>
          ))}
        </div>
        <div>
          <p>P1 Hand</p>
          {gameState.p1Hand.map((val) => (
            <span>{val} </span>
          ))}
        </div>
        <div>
          <p>P2 hand</p>
          {gameState.p2Hand.map((val) => (
            <span>{val} </span>
          ))}
        </div>
        <div>
          <p>P1 played</p>
          {gameState.p1CardPlayed}
        </div>
        <div>
          <p>p2 played</p>
          {gameState.p2CardPlayed}
        </div>
      </div>
    </div>
  );
};

export default Game;
