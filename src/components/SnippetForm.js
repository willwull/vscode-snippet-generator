import React from "react";
import PropTypes from "prop-types";
import FancyInput from "./FancyInput";

function SnippetForm(props) {
  const {
    name,
    onNameChange,
  } = props;

  return (
    <form>
      <FancyInput name="name" value={name} onChange={onNameChange} />
    </form>
  );
}

SnippetForm.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default SnippetForm;
