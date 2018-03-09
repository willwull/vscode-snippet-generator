import React from "react";
import PropTypes from "prop-types";
import FancyInput from "./FancyInput";

function SnippetForm(props) {
  const {
    name,
    prefix,
    onNameChange,
    onPrefixChange,
  } = props;

  return (
    <form>
      <FancyInput name="name" value={name} onChange={onNameChange} />
      <FancyInput name="prefix" value={prefix} onChange={onPrefixChange} />
    </form>
  );
}

SnippetForm.propTypes = {
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onPrefixChange: PropTypes.func.isRequired,
};

export default SnippetForm;
