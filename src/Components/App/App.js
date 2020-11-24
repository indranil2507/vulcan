import { ThemeProvider } from "styled-components";
import Router from "../Router";
import "./App.scss";
import styles from "../../styles"
import {Provider} from "react-redux";
import store from "../../Redux/store";
function App() {
  return (
    <ThemeProvider theme={styles}>
    <Provider store={store}>
    <div className="App">
    <Router />
    </div>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
