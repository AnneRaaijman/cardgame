const initialState = {
  deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  turnState: "initializing",
  p1Hand: [1, 3, 5, 8, 9],
  p2Hand: [2, 3, 6, 7, 8],
  turn: 0,
  p1Score: 0,
  p2Score: 0,
};

//const turnStates = ["player_1", "player_2", "resolving", "initializing"];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
