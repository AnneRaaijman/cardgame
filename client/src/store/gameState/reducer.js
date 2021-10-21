const initialState = {
  deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  turnState: "initializing",
  p1Hand: [],
  p2Hand: [],
  p1CardPlayed: undefined,
  p2CardPlayed: undefined,
  turn: 0,
  p1Score: 0,
  p2Score: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "deck/initial":
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
      console.log("start deck", startDeck);
      return {
        ...state,
        deck: startDeck,
      };

    case "hands/initial":
      const player1hand = initialState.deck.splice(0, 5);
      const player2hand = initialState.deck.splice(0, 5);
      return {
        ...state,
        p1Hand: player1hand,
        p2Hand: player2hand,
      };

    case "turnState/p1Turn":
      return {
        ...state,
        turnState: "player1_turn",
      };

    // case "player1/cardplayed"

    default:
      return state;
  }
};
