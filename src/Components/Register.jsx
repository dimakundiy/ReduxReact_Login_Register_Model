import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import {renderTextField}  from './Helpers/RenderInputs';
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import {validate}  from './Helpers/RenderInputs'
import asyncValidate from './Helpers/asyncValidate'

 class Register extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const {pristine, reset , submitting} = this.props;
    return (
      <div className="register">
        <form  name="register" onSubmit={this.props.handleSubmit}>
        <div>
            <Field
              name="email"
              component={renderTextField}
              label="E-mail:"
              type="email"
            />
          </div>
          <div>
            <Field
              name="password"
              component={renderTextField}
              label="Password:"
              type="password"
            />
          </div>
          <div>
            <Field
              name="RepeatPassword"
              component={renderTextField}
              label="Repeat password:"
              type="password"
            />
          </div>
          <div>
            <DialogActions>
            <Button fullWidth={true} type="button" color="primary" disabled={pristine || submitting} onClick={reset}>
               CLEAR
        </Button >
              <Button fullWidth={true} type="submit" value="Login" color="primary">
                Sign Up
              </Button> </DialogActions>
          </div>
        </form>
      </div>
    );
  }
}

Register = reduxForm({
  // a unique name for the form
  form: "register",
  validate,
  asyncValidate
})(Register);

export default Register;

