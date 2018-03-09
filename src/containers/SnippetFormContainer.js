import { connect } from "react-redux";
import SnippetForm from "../components/SnippetForm";
import { setName } from "../actions";

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: (event) => {
      dispatch(setName(event.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnippetForm);
