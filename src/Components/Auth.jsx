import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {renderTextField}  from './Helpers/RenderInputs'
 
class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="auth">
        <form name="auth" onSubmit={this.props.handleSubmit}>
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
            <DialogActions>
              <Button type="submit" value="Login" color="primary">
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
  form: "login"
})(Auth);

export default Auth;
