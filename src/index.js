import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const rootComponent = (
  <div>Hello</div>
);

ReactDOM.render(rootComponent, document.getElementById("root"));
registerServiceWorker();
