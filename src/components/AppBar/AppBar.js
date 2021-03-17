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
  const currentTasks = useSelector(({ tasks }) => tasks.currentTasks);
  const doneTasks = useSelector(({ tasks }) => tasks.doneTasks);

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
        <Tab label={<TabLabel count={currentTasks.length} title="Current" />} />
        <Tab label={<TabLabel count={doneTasks.length} title="Done" />} />
      </Tabs>
    </AppBarMUI>
  );
}

export default AppBar;
