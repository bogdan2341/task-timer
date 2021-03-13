import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import TaskInput from "./components/TaskInput";
import TasksList from "./components/TasksList";
import MainLayout from "./layouts/MainLayout";
import store from "./store";
import theme from "./theme";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <TaskInput />
          <TasksList />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
