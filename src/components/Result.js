import React from "react";
import PropTypes from "prop-types";

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

  return (
    <div id="result">
      <pre>
        {resultString}
      </pre>
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
