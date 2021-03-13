import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import store from "./store";
import theme from "./theme";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
