import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import {Redirect} from 'react-router-dom';

function Auth(props) {

  const parsed = queryString.parse(props.location.location.search);
  
  if (parsed.mode && parsed.mode === "resetPassword") {
    let state = {
      params: parsed
    };
    return(<Redirect to={{pathname: "/reset", state: state}} />);
  }

  return (<Redirect to="/" />);
}

Auth.propTypes = {
  jss: PropTypes.object.isRequired
}

export default Auth;