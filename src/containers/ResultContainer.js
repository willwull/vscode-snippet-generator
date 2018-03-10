import { connect } from "react-redux";
import Result from "../components/Result";

function mapStateToProps({ name, prefix, body, description }) {
  return {
    name,
    prefix,
    body,
    description,
  };
}

const none = () => ({});

export default connect(mapStateToProps, none)(Result);
