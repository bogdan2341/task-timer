import { makeStyles, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDeletedTimers, setTimers } from "../store/timersReducer/actions";
import AppBar from "../components/AppBar";
import CurrentTasksTimers from "../pages/CurrentTasks";
import DeletedTasks from "../pages/DeletedTasks";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  tabPanel: {
    maxWidth: "560px",
    textAlign: "center",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {},
  },
}));

function MainLayout({ children }) {
  const dispatch = useDispatch();
  const timers = useSelector((store) => store.timersStore.timers);
  const deletedTimers = useSelector((store) => store.timersStore.deletedTimers);
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const tabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const loadDataFromLocalStorage = () => {
    const deletedTimers = JSON.parse(localStorage.getItem("deletedTimers"));
    const timers = JSON.parse(localStorage.getItem("timers"));
    if (deletedTimers && deletedTimers.length) {
      dispatch(setDeletedTimers(deletedTimers));
    }
    if (timers && timers.length) {
      dispatch(setTimers(timers));
    }
  };

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, [timers]);

  useEffect(() => {
    localStorage.setItem("deletedTimers", JSON.stringify(deletedTimers));
  }, [deletedTimers]);

  return (
    <>
      <AppBar tabChangeHandler={tabChangeHandler} tabValue={tabValue} />
      <div className={classes.tabPanel}>
        <TabPanel value={tabValue} index={0}>
          <CurrentTasksTimers />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <DeletedTasks />
        </TabPanel>
      </div>
    </>
  );
}

export default MainLayout;
