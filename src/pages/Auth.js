import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import ResetPassword from './ResetPassword';
import {Redirect} from 'react-router-dom';

function Auth(props) {

  console.log(props)

  const parsed = queryString.parse(props.location.location.search);
  console.log(parsed);
  
  if (parsed.mode && parsed.mode === "resetPassword") {
    //props.location.history.replace('/reset');
    return (<ResetPassword fbData={parsed} jss={props.jss} />);
  }

  return (
    <Redirect to="/" />
  );
}

Auth.propTypes = {
  jss: PropTypes.object.isRequired
}

export default Auth;