const initialState = {
  deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  turnState: "initializing",
  p1Hand: [],
  p2Hand: [],
  p1CardPlayed: 0,
  p2CardPlayed: 0,
  turn: 0,
  p1Score: 0,
  p2Score: 0,
  errorMessages: [],
};

//turnStates: "initializing, player1_turn_draw, player1_turn, player2_turn_draw, player2_turn, resolve"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "game/initialization":
      const startDeck = initialState.deck;
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

      shuffle(startDeck);
      const player1hand = initialState.deck.splice(0, 4);
      const player2hand = initialState.deck.splice(0, 4);
      return {
        ...state,
        deck: startDeck,
        p1Hand: player1hand,
        p2Hand: player2hand,
        turnState: "player1_turn_draw",
      };

    case "player1/draw":
      const drawcard = initialState.deck.splice(0, 1);

      return {
        ...state,
        p1Hand: [...state.p1Hand, ...drawcard],
        turnState: "player1_turn",
      };

    case "player1/turn":
      const card_ix = action.payload.card_ix;
      const playerId = action.payload.id;
      if (playerId !== 1) {
        return {
          ...state,
          errorMessages: "not your turn",
        };
      } else {
        const handCopy = [...state.p1Hand];
        handCopy.splice(card_ix, 1);
        const newState = {
          ...state,
          p1CardPlayed: state.p1Hand[card_ix],
          turnState: "player2_turn_draw",
          p1Hand: handCopy,
        };

        return newState;
      }
    case "player2/draw":
      const drawp2card = initialState.deck.splice(0, 1);

      return {
        ...state,
        p2Hand: [...state.p2Hand, ...drawp2card],
        turnState: "player2_turn",
      };

    case "player2/turn":
      const cardP2_ix = action.payload.cardP2_ix;
      const player2Id = action.payload.id;
      if (player2Id !== 2) {
        return {
          ...state,
          errorMessages: "not your turn",
        };
      } else {
        const handCopy = [...state.p2Hand];
        handCopy.splice(cardP2_ix, 1);
        console.log("p2hand?", state.p2Hand);
        const newState = {
          ...state,
          p2CardPlayed: state.p2Hand[cardP2_ix],
          turnState: "resolve",
          p2Hand: handCopy,
        };

        return newState;
      }
    case "resolve/result":
      if (state.p1CardPlayed > state.p2CardPlayed)
        return {
          ...state,
          p1Score: state.p1Score + 1,
        };

    default:
      return state;
  }
};
