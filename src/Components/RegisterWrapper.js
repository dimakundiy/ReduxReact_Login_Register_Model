import React from "react";
import Register from "./Register";
import { connect } from "react-redux";
import register from "../store/Register/actions";

class RegisterWrapper extends React.Component {
  submit = values => {
    console.log(values);
    this.props.register(values.email, values.password);
  };
  render() {
    let { isRegisterPending, isRegisterSuccess, registerError } = this.props;

    return <Register onSubmit={this.submit} />;
  }
}
const mapStateToProps = state => {
  return {
    isRegisterPending: state.register.isRegisterPending,
    isRegisterSuccess: state.register.isRegisterSuccess,
    registerError: state.register.registerError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: (email, password) => dispatch(register(email, password))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterWrapper);
