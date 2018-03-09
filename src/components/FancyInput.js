import React from "react";
import PropTypes from "prop-types";
import "../styles/FancyInput.css";

function FancyInput({ name, value, onChange }) {
  return (
    <label className="fancy-input">
      <div className="fancy-label">{name}</div>
      <input type="text" name={name} id={name} value={value} onChange={onChange} />
    </label>
  );
}

FancyInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FancyInput;
