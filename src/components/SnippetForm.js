import React from "react";
import PropTypes from "prop-types";
import FancyInput from "./FancyInput";
import FancyTextarea from "./FancyTextarea";
import "../styles/SnippetForm.css";

function SnippetForm(props) {
  const {
    name,
    prefix,
    description,
    body,
    onNameChange,
    onPrefixChange,
    onDescriptionChange,
    onBodyChange,
  } = props;

  return (
    <form className="snippet-form">
      <FancyInput name="name" value={name} onChange={onNameChange} />
      <FancyInput name="prefix" value={prefix} onChange={onPrefixChange} />
      <FancyInput name="description" value={description} onChange={onDescriptionChange} />
      <FancyTextarea name="body" value={body} onChange={onBodyChange} />
    </form>
  );
}

SnippetForm.propTypes = {
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onPrefixChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
};

export default SnippetForm;
