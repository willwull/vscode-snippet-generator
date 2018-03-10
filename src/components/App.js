import React from "react";
import SnippetFormContainer from "../containers/SnippetFormContainer";
import ResultContainer from "../containers/ResultContainer";
import "../styles/App.css";

function App() {
  return (
    <div id="main-container">
      <div className="input">
        <h1>Input</h1>
        <SnippetFormContainer />
      </div>
      <div className="output">
        <h1>Output</h1>
        <ResultContainer />
      </div>
    </div>
  );
}

export default App;
