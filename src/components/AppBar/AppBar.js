import {
  AppBar as AppBarMUI,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useTheme,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import ToggleDarkModeButton from "../ToggleDarkModeButton";

function AppBar({ tabValue, tabChangeHandler }) {
  const isDark = useSelector(({ settings }) => settings.isDark);
  const theme = useTheme();
  return (
    <AppBarMUI
      position="sticky"
      style={{ backgroundColor: isDark && theme.palette.background.paper }}
    >
      <Toolbar>
        <Typography variant="h5" style={{ margin: "auto" }}>
          Tasks Timer
        </Typography>
        <ToggleDarkModeButton />
      </Toolbar>
      <Tabs
        value={tabValue}
        onChange={tabChangeHandler}
        indicatorColor="secondary"
        centered
      >
        <Tab label="Current" />
        <Tab label="Deleted" />
      </Tabs>
    </AppBarMUI>
  );
}

export default AppBar;
