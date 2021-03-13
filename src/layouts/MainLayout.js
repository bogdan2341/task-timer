import { makeStyles, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimers } from "../store/actions";
import AppBar from "../components/AppBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "560px",
    textAlign: "center",
    margin: "auto",
    marginTop: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  tabs: {
    flexGrow: 1,
  },
}));

function MainLayout({ children }) {
  const timers = useSelector((store) => store.timers);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const tabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setTabValue(index);
  };

  useEffect(() => {
    const timers = JSON.parse(localStorage.getItem("timers"));
    if (timers && timers.length) {
      dispatch(setTimers(timers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, [timers]);

  return (
    <>
      <AppBar tabChangeHandler={tabChangeHandler} tabValue={tabValue} />
      <TabPanel value={tabValue} index={0}>
        <div className={classes.root}>{children}</div>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        "Hello"
      </TabPanel>
    </>
  );
}

export default MainLayout;
