import { createMuiTheme } from "@material-ui/core";
import { indigo, purple, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: indigo[400],
    },
    secondary: {
      main: purple[400],
    },
  },
});

export default theme;
