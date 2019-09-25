import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Reset from '../components/ResetPassword';

function ResetPassword(props) {

  let content = (<Reset className={props.jss.classes.reset} classes={props.jss.rules.raw} />);

  console.log(props);

  /*if (Object.keys(resetParams).length > 0) {
    content = (<div>test successful!</div>)
  } else {
    content = (<Reset className={props.jss.classes.reset} classes={props.jss.rules.raw} />)
  }*/

  return (
    <div className={props.jss.classes.app}>
      <div className={props.jss.classes.container}>
        {content}
      </div>
    </div>
  );
}

ResetPassword.propTypes = {
  jss: PropTypes.object.isRequired
}

export default ResetPassword