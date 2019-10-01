import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Reset from '../components/ResetPassword';
import PasswordConfirm from '../components/PasswordConfirmation';
import Link from '../components/Link';
import Firebase from '../components/Firebase';

function ResetPassword(props) {

  let params = props.params

  if (!params) {
    try {
      params = props.location.location.state.params;
    } catch(e) {}
  }

  let content = (<Reset className={props.jss.classes.reset} classes={props.jss.rules.raw} />);
  let user = Firebase.getUser();

  if (user) {
    content = (<PasswordConfirm classes={props.jss.rules.raw} user={user} />);
  }

  if (params) {
    content = (<PasswordConfirm classes={props.jss.rules.raw} code={params.oobCode} />)
  }

  const StyledLink = injectSheet(props.jss.rules.raw)(Link)

  return (
    <div>
      <section id="reset">
        {content}
      </section>
      <section id="links">
        <StyledLink href="/">Back</StyledLink>
      </section>
    </div>
  );
}

ResetPassword.propTypes = {
  jss: PropTypes.object.isRequired,
  params: PropTypes.object
}

export default ResetPassword