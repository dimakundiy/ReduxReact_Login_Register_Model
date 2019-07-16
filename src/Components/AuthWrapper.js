import React from "react";
import Auth from "./Auth";
import { connect } from "react-redux";
import login from "../store/Auth/actions";
class AuthWrapper extends React.Component {
  submit = values => {
    console.log(values);
    this.props.login(values.email, values.password);
  };
  render() {
    let { isLoginPending, isLoginSuccess, loginError } = this.props;

    return <Auth onSubmit={this.submit} />;
  }
}
const mapStateToProps = state => {
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWrapper);
