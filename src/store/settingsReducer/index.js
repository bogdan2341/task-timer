import { SET_DARK_THEME, TOGGLE_DARK_MODE } from "./actionTypes";

const initialState = {
  isDark: false,
  pallet: {
    primary: "#3f51b5",
    secondary: "#ab47bc",
  },
};

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDark: !state.isDark,
      };
    case SET_DARK_THEME:
      return {
        ...state,
        isDark: payload.isDark,
      };
    default:
      return state;
  }
};

export default settingsReducer;
