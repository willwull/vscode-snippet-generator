import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/index.css";

const initialState = {
  name: "",
  prefix: "",
  body: "",
  description: "",
};

const store = createStore(reducer, initialState);

const rootComponent = (
  <Provider store={store}>
    <div>Hello</div>
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById("root"));
registerServiceWorker();
