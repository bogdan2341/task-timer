import {
  AppBar as AppBarMUI,
  Toolbar,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";

function AppBar({ tabValue, tabChangeHandler }) {
  return (
    <AppBarMUI position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h5" style={{ margin: "auto" }}>
          Tasks Timer
        </Typography>
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
