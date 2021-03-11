import { Paper } from "@material-ui/core";
import classes from "./MainLayout.module.css";

function MainLayout({ children }) {
  return <Paper className={classes.Main}>{children}</Paper>;
}

export default MainLayout;
