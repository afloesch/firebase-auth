import React from 'react';
import PropTypes from 'prop-types';

import Form from '../components/Login';

function Login(props) {

  return (
    <Form classes={props.jss.rules.raw} className={props.jss.classes.loginform}/>
  );
}

Login.propTypes = {
  jss: PropTypes.object.isRequired
}

export default Login;
