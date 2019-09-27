import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import Reset from '../components/ResetPassword';
import PasswordConfirm from '../components/PasswordConfirmation';

function ResetPassword(props) {

  let content = (<Reset className={props.jss.classes.reset} classes={props.jss.rules.raw} />);
  let params = props.params

  if (!params) {
    try {
      params = props.location.location.state.params;
    } catch(e) {}
  }

  if (params) {
    content = (<PasswordConfirm classes={props.jss.rules.raw} code={params.oobCode} />)
  }

  return (
    <Paper className={props.jss.classes.paper}>
      {content}
    </Paper>
  );
}

ResetPassword.propTypes = {
  jss: PropTypes.object.isRequired,
  params: PropTypes.object
}

export default ResetPassword