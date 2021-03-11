import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import InputNewTask from "./components/InputNewTask";
import TaskList from "./components/TaskList";
import MainLayout from "./layouts/MainLayout";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <MainLayout>
        <InputNewTask />
        <TaskList />
      </MainLayout>
    </Provider>
  );
}

export default App;
