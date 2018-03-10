import React from "react";
import SnippetFormContainer from "../containers/SnippetFormContainer";
import ResultContainer from "../containers/ResultContainer";
import "../styles/App.css";

function App() {
  return (
    <div>
      <header id="header">
        <h1>VS Code snippet generator</h1>
      </header>
      <div id="main-container">
        <div id="input-container">
          <SnippetFormContainer />
        </div>
        <div id="output-container">
          <ResultContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
