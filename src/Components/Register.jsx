import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import {renderTextField}  from './Helpers/RenderInputs';
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";

 class Register extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
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
              <Button type="submit" value="Register"color="primary">Sign Up</Button>
            </DialogActions>
          </div>
        </form>
      </div>
    );
  }
}

Register = reduxForm({
  // a unique name for the form
  form: "register"
})(Register);

export default Register;

