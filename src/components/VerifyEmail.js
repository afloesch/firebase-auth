import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
//import {Redirect} from 'react-router-dom';

import Firebase from './Firebase';
import Loader from './Loader';

class VerifyEmail extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    code: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loader: true,
      verified: false
    }

    this.controls = {
      loader: injectSheet(this.props.classes)(Loader)
    }

    let self = this;
    Firebase.verifyEmail(this.props.code)
    .then(function() {
      self.setState({verified: true, loader: false});
      return self.render();
    })
    .catch(function(err) {
      self.setState({error: err, loader: false});
      return self.render();
    });
  }

  complete() {
    return(
      <div className={this.props.className}>
        <div>Thank you! Your email address has been verified.</div>
      </div>
    );
  }

  error() {
    return(
      <div className={this.props.className}>
        <div>Error! {this.state.error}</div>
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

  render() {

    if (this.state.loader) return this.loader();

    if (this.state.verified) return this.complete();

    if (this.state.error) return this.error();
  }
}

export default VerifyEmail;