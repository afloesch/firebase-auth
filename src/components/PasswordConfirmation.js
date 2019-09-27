import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import {Redirect} from 'react-router-dom';

import Firebase from './Firebase';
import Field from './Field';
import Button from './Button';
import ErrorMsg from './ErrorMsg';
import Loader from './Loader';

class PasswordConfirmation extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    code: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirm: "",
      error: null,
      loader: false,
    }

    this.controls = {
      password: injectSheet(this.props.classes)(Field),
      submit: injectSheet(this.props.classes)(Button),
      error: injectSheet(this.props.classes)(ErrorMsg),
      loader: injectSheet(this.props.classes)(Loader)
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    let state = {};
    state[evt.target.id] = evt.target.value;
    this.setState(state);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({loader: true});

    if (this.state.password !== this.state.confirm) {
      let e = {message: "Password values do not match."};
      this.setState({error: e});
      return;
    }

    if (this.state.password.length < 8) {
      let e = {message: "Passwords need to be at least 8 characters long."};
      this.setState({error: e});
      return;
    }

    let sc = !/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?\d]/g.test(this.state.password);

    if (sc) {
      let e = {message: "Passwords must contain at least one number or special character."};
      this.setState({error: e});
      return;
    }

    let self = this;
    Firebase.confirmPasswordReset(this.props.code, this.state.password)
      .then(function() {
        self.setState({loader: false});
        return (<Redirect to="/" />);
      })
      .catch(function(error) {
        self.setState({error: error, loader: false});
      });
  }

  loader() {
    const Spinner = this.controls.loader;
    return(
      <div className={this.props.className}>
        <Spinner />
      </div>
    )
  }

  render() {
    const Password = this.controls.password;
    const Submit = this.controls.submit;
    //const ErrMsg = this.controls.error;

    if (this.state.loader) {
      return this.loader();
    }

    let Err = null;

    if (this.state.error) {
      Err = (
        <ErrorMsg>{this.state.error.message}</ErrorMsg>
      );
    }

    return (
      <div className={this.props.className}>
        <span>Enter your new password. Passwords must be a minimum of 8 characters long, with at least one number or special character.</span>
        <section id="error">{Err}</section>
        <section id="newPasswordForm">
          <form id="form" onSubmit={this.handleSubmit}>
            <div>
              <Password required={true} variant="outlined" type="password" id="password" label="New Password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <div>
              <Password required={true} variant="outlined" type="password" id="confirm" label="Confirm Password" value={this.state.confirm} onChange={this.handleChange} />
            </div>
            <Submit type="submit">Update</Submit>
          </form>
        </section>
      </div>
    );
  }
}

export default PasswordConfirmation