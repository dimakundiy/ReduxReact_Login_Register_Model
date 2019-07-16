import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {renderTextField}  from './Helpers/RenderInputs';
import {validate}  from './Helpers/RenderInputs'
import asyncValidate from './Helpers/asyncValidate'


class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {pristine, reset, submitting} = this.props;
    return (
      <div className="auth">
        <form name="auth" onSubmit={this.props.handleSubmit}>
          <div>
            <Field
              name="email"
              component={renderTextField}
              label="E-mail:"
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
            <DialogActions>          
        <Button fullWidth={true} type="button" color="primary" disabled={pristine || submitting} onClick={reset}>
       CLEAR
        </Button >
              <Button fullWidth={true} type="submit" value="Login" color="primary">
                Sign In
              </Button>
            </DialogActions>
          </div>    
        </form>
      </div>
    );
  }
}

Auth = reduxForm({
  // a unique name for the form
  form: "Auth",
  validate,
  asyncValidate
})(Auth);

export default Auth;
