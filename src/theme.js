import { createMuiTheme } from "@material-ui/core";
import { indigo, purple, pink, amber } from "@material-ui/core/colors";

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
        main: isDark ? indigo[400] : indigo[500],
      },
      secondary: {
        main: isDark ? indigo[400] : pink["A100"],
      },
    },
  });

  return theme;
}

export default useAppTheme;
