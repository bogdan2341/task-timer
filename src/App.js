import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import InputNewTask from "./components/InputNewTask";
import TaskList from "./components/TaskList";
import MainLayout from "./layouts/MainLayout";
import store from "./store";
import theme from "./theme";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <InputNewTask />
          <TaskList />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
