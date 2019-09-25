import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { Redirect } from 'react-router'

function Auth(props) {

  const parsed = queryString.parse(props.location.search);
  console.log(parsed);

  if (!parsed.mode) {
    return (
      /* Need an error page */
      <div>
        Error: unsupported method
      </div>
    )
  }
  
  if (parsed.mode === "resetPassword") {
    return (<Redirect
      to={{
        pathname: "/reset",
        state: { resetParams: parsed }
      }}
    />);
  }

  return (
    <div>
      {JSON.stringify(parsed)}
    </div>
  )
}

Auth.propTypes = {
  location: PropTypes.object.isRequired
}

export default Auth;