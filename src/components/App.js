import React from "react";
import SnippetFormContainer from "../containers/SnippetFormContainer";
import ResultContainer from "../containers/ResultContainer";
import "../styles/App.css";

function App() {
  return (
    <div>
      <header id="header">
        <h1>VS Code snippet generator</h1>
        Fill out the form to generate a JSON snippet.
        Double quotes are automatically escaped and the body is
        automatically split into a string array.
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
