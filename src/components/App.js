import React from "react";
import SnippetFormContainer from "../containers/SnippetFormContainer";
import ResultContainer from "../containers/ResultContainer";
import "../styles/App.css";

function App() {
  return (
    <div id="main-container">
      <SnippetFormContainer />
      <ResultContainer />
    </div>
  );
}

export default App;
