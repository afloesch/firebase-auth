import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import Form from '../components/Login';

function Login(props) {

  console.log(props);

  return (
    <Paper>
      <div className={props.jss.classes.app}>
        <div className={props.jss.classes.container}>
          <div>
            <img className={props.jss.classes.logo} src="/img/bw-logo-black.png" alt="Logo" />
          </div>
          <Form classes={props.jss.rules.raw} className={props.jss.classes.loginform}/>
        </div>
      </div>
    </Paper>
  );
}

Login.propTypes = {
  jss: PropTypes.object.isRequired
}

export default Login;
