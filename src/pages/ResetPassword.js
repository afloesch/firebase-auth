import React from 'react';
import PropTypes from 'prop-types';

import Reset from '../components/ResetPassword';

function ResetPassword(props) {

  let content = (<Reset className={props.jss.classes.reset} classes={props.jss.rules.raw} />);

  console.log(props);

  if (props.fbData) {
    content = (<div>test successful!</div>)
  }

  return content;
}

ResetPassword.propTypes = {
  jss: PropTypes.object.isRequired,
  fbData: PropTypes.object
}

export default ResetPassword