import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import { setDarkTheme } from "./store/settingsReducer/actions";
import useAppTheme from "./theme";

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector(({ settings }) => settings.isDark);

  useLayoutEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    dispatch(setDarkTheme(isDark));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeProvider theme={useAppTheme(isDark)}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
