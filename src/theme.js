import { createMuiTheme } from "@material-ui/core";
import { indigo, purple } from "@material-ui/core/colors";

const isDark = false;
const theme = createMuiTheme({
  palette: {
    type: isDark ? "dark" : "light",
    primary: {
      main: indigo[400],
    },
    secondary: {
      main: purple[400],
    },
  },
});

export default theme;
