import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null
  //remove after debugging
  //token: "BQDgYU1RdoStxvX0wSTvPJ1w_HNEpF5Ht50oZQ7H2CtjbCFccFCKb4RNgAj5FVIFU4LioyJ_tjqOtA0dvJk34nnt6hXkIlhEkyhHh-_hW5PK6yigLwlkWHalns0iV1OoyfnZvWcCUiCxbQhMdf6xKu45YpIodvjkSlfDhodk7pLl-azquw6C3PG_VmABSn__qtW9oD7fu2HCqh4_"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;