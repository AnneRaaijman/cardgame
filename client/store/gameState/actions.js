import axios from "axios";

export const fetchMushrooms = () => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get("http://localhost:4000/");
      dispatch({ type: "mushrooms/fetched", payload: res.data });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchedMushroomDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(`http://localhost:4000/mushroom/${id}`);
      console.log(res);
      dispatch({ type: "mushrooms/detailsfetched", payload: res.data });
    } catch (e) {
      console.log(e.message);
    }
  };
};

// export const heartsUpdated = (data) => {
//   return {
//     type: "artwork/heartsUpdated",
//     payload: data,
//   };
// };

// export const updateHearts = (id) => {
//   return async (dispatch, getState) => {
//     try {
//       const reduxState = getState();
//       const hearts = reduxState.artwork.details.hearts;
//       // console.log("our state?", hearts);
//       const res = await axios.patch(`http://localhost:4000/artwork/${id}`, {
//         hearts: hearts + 1,
//       });
//       dispatch(heartsUpdated(res.data.hearts));
//       console.log("res data", res.data.hearts);
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// };

// export const startAuction = (title, imgUrl, minimumBid, hearts) => {
//   return async (dispatch, getState) => {
//     try {
//       const reduxState = getState();
//       const token = reduxState.user.token;
//       const userId = reduxState.user.id;

//       const res = await axios.post(
//         "http://localhost:4000/artwork/auction",
//         {
//           title,
//           imgUrl,
//           minimumBid,
//           hearts,
//           userId,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       dispatch(showMessageWithTimeout("success", true, "Auction Created"));
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// };

// export const bidsUpdated = (data) => {
//   return {
//     type: "artworks/bidsUpdated",
//     payload: data,
//   };
// };

// export const postBid = ({ amount }) => {
//   return async (dispatch, getState) => {
//     try {
//       const reduxState = getState();
//       const token = reduxState.user.token;
//       const email = reduxState.user.email;
//       const artworkId = reduxState.artwork.details.id;
//       const res = await axios.post(
//         "http://localhost:4000/artwork/bids",
//         {
//           amount,
//           email,
//           artworkId,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       // dispatch some action to add this new post to the reducer
//       dispatch(bidsUpdated(res.data));
//     } catch (e) {
//       console.log("error message", e.message);
//     }
//   };
// };
