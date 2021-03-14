import { SET_DARK_THEME, TOGGLE_DARK_MODE } from "./actionTypes";

export const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE,
  };
};

export const setDarkTheme = (isDark) => {
  return {
    type: SET_DARK_THEME,
    payload: { isDark },
  };
};
