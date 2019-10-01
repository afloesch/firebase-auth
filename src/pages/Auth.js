import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {Redirect} from 'react-router-dom';

function Auth(props) {

  const parsed = queryString.parse(props.location.location.search);
  let state = {
    params: parsed
  };

  if (parsed.mode && parsed.mode === "resetPassword") {
    return(<Redirect to={{pathname: "/reset", state: state}} />);
  }

  if (parsed.mode && parsed.mode === "verifyEmail") {
    return(<Redirect to={{pathname: "/create", state: state}} />)
  }

  return (<Redirect to="/" />);
}

Auth.propTypes = {
  jss: PropTypes.object.isRequired
}

export default Auth;