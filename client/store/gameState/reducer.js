const initialState = {
  loading: true,
  all: [],
  details: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "mushrooms/fetched":
      return { loading: false, all: action.payload };

    case "mushrooms/detailsfetched":
      return {
        ...state,
        details: action.payload,
      };
    // case "artworks/bidsUpdated":
    //   const newArrayofBids = state.details.bids.concat(action.payload);
    //   console.log("reducer", newArrayofBids);
    //   return {
    //     ...state,
    //     details: { ...state.details, bids: newArrayofBids },
    //   };
    // case "artwork/heartsUpdated":
    //   return {
    //     ...state,
    //     details: { ...state.details, hearts: action.payload },
    //   };

    default:
      return state;
  }
};
