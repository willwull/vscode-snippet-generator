import React from "react";
import PropTypes from "prop-types";
import "../styles/FancyTextarea.css";

function FancyTextarea({ name, value, onChange }) {
  return (
    <label className="fancy-textarea">
      <div className="fancy-label">{name}</div>
      <textarea name={name} value={value} onChange={onChange} />
    </label>
  );
}

FancyTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FancyTextarea;
