export const initialize = () => {
  return {
    type: "game/initialization",
  };
};

export const player1draw = () => {
  return {
    type: "player1/draw",
  };
};

export const player1Turn = (data) => {
  console.log("data2?", data);

  return {
    type: "player1/turn",
    payload: data,
  };
};

export const player2draw = () => {
  return {
    type: "player2/draw",
  };
};

export const player2Turn = (data) => {
  return {
    type: "player2/turn",
    payload: data,
  };
};

export const Resolve = () => {
  return {
    type: "resolve/result",
  };
};
export const endOfTurn = () => {
  return {
    type: "turn/end",
  };
};
