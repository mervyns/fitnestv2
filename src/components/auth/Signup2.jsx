import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from ""


class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }
    
    onSubmit(e){
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
    }
  render() {
      const {errors} = this.state
    return (
      <div>
        
      </div>
    )
  }
}

export default 