import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Create from '../components/CreateAccount';
import Verify from '../components/VerifyEmail';
import Link from '../components/Link';

function CreateAccount(props) {

  let content = (<Create classes={props.jss.rules.raw} />);
  let params = props.params

  if (!params) {
    try {
      params = props.location.location.state.params;
    } catch(e) {}
  }

  if (params) {
    content = (<Verify classes={props.jss.rules.raw} code={params.oobCode} />)
  }

  const StyledLink = injectSheet(props.jss.rules.raw)(Link)

  return (
    <div>
      <section id="create">
        {content}
      </section>
      <section id="links">
        <StyledLink href="/">Back</StyledLink>
      </section>
    </div>
  );
}

CreateAccount.propTypes = {
  jss: PropTypes.object.isRequired
}

export default CreateAccount