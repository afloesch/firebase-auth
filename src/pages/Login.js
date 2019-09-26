import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Form from '../components/Login';

function Login(props) {

  return (
    <Paper className={props.jss.classes.paper}>
      <div>
        <img className={props.jss.classes.logo} src="/img/bw-logo-black.png" alt="Logo" />
      </div>
      <Form classes={props.jss.rules.raw} className={props.jss.classes.loginform}/>
    </Paper>
  );
}

Login.propTypes = {
  jss: PropTypes.object.isRequired
}

export default Login;
