import React from 'react';
import PropTypes from 'prop-types';

import Create from '../components/CreateAccount';

function CreateAccount(props) {
  return (
    <Create classes={props.jss.rules.raw} />
  );
}

CreateAccount.propTypes = {
  jss: PropTypes.object.isRequired
}

export default CreateAccount