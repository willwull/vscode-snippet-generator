import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark as theme } from "react-syntax-highlighter/styles/hljs";
import Clipboard from "react-clipboard.js";
import "../styles/Result.css";

function format(string) {
  return string.replace(/"/g, "\\\"");
}

function Result({ name, prefix, body, description }) {
  const resultString = `"${format(name)}": {
  "prefix": "${format(prefix)}",
  "description": "${format(description)}",
  "body": [
    ${body.split("\n").map(line => `"${format(line)}"`).join(",\n    ")}
  ]
}`;

  const customStyle = {
    padding: 0,
  };

  return (
    <div id="result">
      <div className="label-container">
        <div className="label">Output</div>
        <div className="copy-wrapper">
          <Clipboard data-clipboard-text={resultString}>Copy</Clipboard>
        </div>
      </div>
      <SyntaxHighlighter language="json" style={theme} customStyle={customStyle}>
        {resultString}
      </SyntaxHighlighter>
    </div>
  );
}

Result.propTypes = {
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Result;
