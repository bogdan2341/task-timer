import { makeStyles, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDoneTasks, setTasks } from "../store/tasksReducer/actions";
import AppBar from "../components/AppBar";
import CurrentTasksTimers from "../pages/CurrentTasks";
import DoneTasks from "../pages/DoneTasks";

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
  const currentTasks = useSelector((store) => store.tasks.currentTasks);
  const doneTasks = useSelector((store) => store.tasks.doneTasks);
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const tabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const loadDataFromLocalStorage = () => {
    const doneTasks = JSON.parse(localStorage.getItem("deletedTimers"));
    const tasks = JSON.parse(localStorage.getItem("timers"));
    if (doneTasks && doneTasks.length) {
      dispatch(setDoneTasks(doneTasks));
    }
    if (tasks && tasks.length) {
      dispatch(setTasks(tasks));
    }
  };

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(currentTasks));
  }, [currentTasks]);

  useEffect(() => {
    localStorage.setItem("deletedTimers", JSON.stringify(doneTasks));
  }, [doneTasks]);

  return (
    <>
      <AppBar tabChangeHandler={tabChangeHandler} tabValue={tabValue} />
      <div className={classes.tabPanel}>
        <TabPanel value={tabValue} index={0}>
          <CurrentTasksTimers />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <DoneTasks />
        </TabPanel>
      </div>
    </>
  );
}

export default MainLayout;
