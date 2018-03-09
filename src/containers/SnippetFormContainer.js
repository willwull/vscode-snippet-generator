import { connect } from "react-redux";
import SnippetForm from "../components/SnippetForm";
import { setName, setPrefix } from "../actions";

function mapStateToProps({ name, prefix }) {
  return {
    name,
    prefix,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnippetForm);
