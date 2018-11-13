import React, { Component } from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import { Field, Form } from "react-final-form";
import { Input } from "final-form-material-ui";

const onSubmit = values => {
  console.log(values);
};

class Signup extends Component {
  render() {
    return (
      <FormGroup>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="username"
                  component={Input}
                  type="text"
                  placeholder="Choose a username"
                />
              </div>
              <div>
                <Field
                  name="email"
                  component={Input}
                  type="text"
                  placeholder="Enter your e-mail"
                />
              </div>
              <div>
                <Field
                  name="password1"
									component={Input}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <Field
                  name="password2"
                  component={Input}
                  type="password"
                  placeholder="Re-enter your password"
                />
              </div>
							<Button 
							type="submit"
								variant="extendedFab"
								color="primary"
								aria-label="Sign Up"
							>Sign Up</Button>
            </form>
          )}
        />
      </FormGroup>
    );
  }
}

export default Signup;
