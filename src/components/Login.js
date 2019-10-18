import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Link from './Link';
import Firebase from './Firebase';
import Button from './Button';
import Field from './Field';
import ErrorMsg from './ErrorMsg';
import Loader from './Loader';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "", 
      password: "",
      loader: true,
      error: null,
      user: null
    };

    this.controls = {
      button: injectSheet(this.props.classes)(Button),
      field: injectSheet(this.props.classes)(Field),
      loader: injectSheet(this.props.classes)(Loader),
      link: injectSheet(this.props.classes)(Link)
    };

    let savedUsername = sessionStorage.getItem("username");
    if (savedUsername && savedUsername !== "") this.state.username = savedUsername;

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
    this.handleAuthStateChange = this.handleAuthStateChange.bind(this);
    this.handleGoogleLoginButton = this.handleGoogleLoginButton.bind(this);

    Firebase.addListener(this.handleAuthStateChange);
  }

  componentDidMount() {
    let self = this;
    Firebase.auth.onAuthStateChanged(function(user) {
      self.setState({user: user, loader: false});
    });
  }

  componentWillUnmount() {
    Firebase.clearListener();
  }

  handleFieldChange(event) {
    event.target.setCustomValidity('');

    let newState = {};
    newState[event.target.id] = event.target.value
    this.setState(newState);

    if (event.target.id === "username") {
      sessionStorage.setItem("username", event.target.value);
    }
  };

  handleInvalid(event) {

    if (event.target.id === "password") {
      event.target.setCustomValidity("Please enter your password.");
    }

    if (event.target.id === "username") {
      event.target.setCustomValidity("Please enter your email address.")
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({loader: true});

    let self = this;
    Firebase.emailAndPassword(this.state.username, this.state.password)
      .then(function(result) {
        return self.setState({user: result, error: null, loader: false});
      })
      .catch(function(error) {
        return self.setState({error: error, loader: false});
      });
  }

  handleAuthStateChange(event) {
    this.setState({user: event, loader: false, error: null, password: ""});
  }

  handleGoogleLoginButton() {
    this.setState({loader: true});
    return Firebase.loginWithGoogle();
  }

  loader() {
    const Loader = this.controls.loader;
    return (
      <div className={this.props.className}>
        <Loader classes={[this.props.classes.loader]}/>
      </div>
    );
  }

  login() {
    let errMsg = null;
    const LoginField = this.controls.field;
    const LoginButton = this.controls.button;
    const LoginLink = this.controls.link;

    if (this.state.loader) {
      return this.loader();
    }

    if (this.state.error) {
      errMsg = (
        <ErrorMsg>{this.state.error.message}</ErrorMsg>
      );
    }

    return(
      <div className={this.props.className}>
        <section id="error">{errMsg}</section>
        <section id="form">
          <form onSubmit={this.handleSubmit} onInvalid={this.handleInvalid}>
            <div>
              <LoginField
                required={true}
                id="username" 
                label="Email" 
                type="email" 
                onChange={this.handleFieldChange} 
                value={this.state.username} />
            </div>
            <div>
              <LoginField
                required={true}
                id="password"
                label="Password"
                type="password"
                onChange={this.handleFieldChange}
                value={this.state.password} />
            </div>
            <LoginButton type="submit">Log in</LoginButton>
          </form>
        </section>
        <section id="federated">
          <LoginButton type="button" onClick={this.handleGoogleLoginButton}>Sign in with Google</LoginButton>
        </section>
        <section id="links">
          <div>
            <LoginLink href="/reset" style={{float:'left'}}>Forgot your password?</LoginLink>
            <LoginLink href="/create" style={{float:'right'}}>Don't have an account?</LoginLink>
          </div>
        </section>
      </div>
    );
  }

  success() {
    const LoginButton = this.controls.button;
    const LoginLink = this.controls.link;

    return(
      <div className={this.props.className}>
        <section id="content">
          <div>
            <h1>You are logged on.</h1>
            <LoginButton onClick={function(){window.logout();}}>Logout</LoginButton>
          </div>
        </section>
        <section id="links">
          <div>
            <LoginLink href="/reset" style={{float:'left'}}>Change your password</LoginLink>
          </div>
        </section>
      </div>
    );
  }

  render() {

    if (this.state.loader) return this.loader();

    if (!this.state.user) {
      return this.login();
    } else {
      return this.success();
    }
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Login;