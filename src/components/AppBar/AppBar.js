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
import TabLabel from "./TabLabel";

function AppBar({ tabValue, tabChangeHandler }) {
  const isDark = useSelector(({ settings }) => settings.isDark);
  const timers = useSelector(({ timersStore }) => timersStore.timers);
  const deletedTimers = useSelector(
    ({ timersStore }) => timersStore.deletedTimers
  );

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
        <Tab label={<TabLabel count={timers.length} title="Current" />} />
        <Tab
          label={<TabLabel count={deletedTimers.length} title="Deleted" />}
        />
      </Tabs>
    </AppBarMUI>
  );
}

export default AppBar;
