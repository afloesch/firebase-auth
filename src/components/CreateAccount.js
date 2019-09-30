import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Firebase from './Firebase';
import Field from './Field';
import Button from './Button';
import ErrorMsg from './ErrorMsg';
import Loader from './Loader';

class CreateAccount extends React.Component {

    static propTypes = {
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    };

    constructor(props) {
      super(props);
      this.state = {
        password: "",
        confirm: "",
        email: "",
        error: null,
        loader: false,
        created: false
      };

      this.controls = {
        field: injectSheet(this.props.classes)(Field),
        button: injectSheet(this.props.classes)(Button),
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
      Firebase.createAccount(this.state.email, this.state.password)
        .then(function(result) {
          self.setState({created: true, loader: true});
          console.log(result.user);

          let user = Firebase.getUser();
          return user.sendEmailVerification();
        })
        .then(function() {
          self.setState({loader: false});
        })
        .catch(function(err) {
          self.setState({error: err, loader: false});
        });
    }

    complete() {
      return(
        <div className={this.props.className}>
          <div>Account created. Please verify your email address using the link provided in your inbox.</div>
          <div>Make sure to check your spam folder if you can't find the email.</div>
        </div>
      );
    }

    loader() {
      const Spinner = this.controls.loader;

      return(
        <div className={this.props.className}>
          <Spinner />
        </div>
      );
    }

    form() {
      const Input = this.controls.field;
      const Submit = this.controls.button;

      let Err = null;
      if (this.state.error) {
        Err = (
          <ErrorMsg>{this.state.error.message}</ErrorMsg>
        );
      }

      return(
        <div className={this.props.className}>
          <section id="error">{Err}</section>
          <section id="create">
            <form id="form" onSubmit={this.handleSubmit}>
              <div>
                <Input required={true} variant="outlined" type="email" id="email" label="Email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div>
                <Input required={true} variant="outlined" type="password" id="password" label="Password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div>
                <Input required={true} variant="outlined" type="password" id="confirm" label="Confirm Password" value={this.state.confirm} onChange={this.handleChange} />
              </div>
              <Submit type="submit">Create Account</Submit>            
            </form>
          </section>
        </div>
      );
    }

    render() {

      if (this.state.loader) {
        return this.loader();
      }

      if (!this.state.created) {
        return this.form();
      } else {
        return this.complete();
      }
    }
}

export default CreateAccount;