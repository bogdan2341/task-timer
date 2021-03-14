import { createMuiTheme } from "@material-ui/core";
import { indigo, purple, lightBlue } from "@material-ui/core/colors";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "./store";
import { toggleDarkMode } from "./store/settingsReducer/actions";

export function isDark() {}

function useAppTheme(isDark) {
  console.log(isDark);
  if (typeof isDark === "undefined") {
    isDark = localStorage.getItem("theme") === "dark";
  }
  const theme = createMuiTheme({
    palette: {
      type: isDark ? "dark" : "light",
      primary: {
        main: isDark ? indigo[300] : indigo[500],
      },
      secondary: {
        main: purple[200],
      },
    },
  });

  return theme;
}

export default useAppTheme;
