import { connect } from "react-redux";
import SnippetForm from "../components/SnippetForm";
import { setName, setPrefix, setDescription, setBody } from "../actions";

function mapStateToProps({ name, prefix, description, body }) {
  return {
    name,
    prefix,
    description,
    body,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: (event) => {
      dispatch(setName(event.target.value));
    },
    onPrefixChange: (event) => {
      dispatch(setPrefix(event.target.value));
    },
    onDescriptionChange: (event) => {
      dispatch(setDescription(event.target.value));
    },
    onBodyChange: (event) => {
      dispatch(setBody(event.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnippetForm);
