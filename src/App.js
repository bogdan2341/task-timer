import { Provider } from "react-redux";
import MainLayout from "./layouts/MainLayout";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <MainLayout>{"Hello"}</MainLayout>
    </Provider>
  );
}

export default App;
