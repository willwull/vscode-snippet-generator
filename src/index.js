import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App";
import "./styles/index.css";

const initialState = {
  name: "",
  prefix: "",
  body: "",
  description: "",
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById("root"));
registerServiceWorker();
