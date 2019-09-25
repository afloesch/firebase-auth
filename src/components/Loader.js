import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const style = {
  loader: {
    width: '10em',
    height: '10em',
    margin: '20px auto',
    fontSize: '10px',
    position: 'relative',
    textIndent: '-9999em',
    borderTop: '1.1em solid rgba(0,0,0, 0.2)',
    borderRight: '1.1em solid rgba(0,0,0, 0.2)',
    borderBottom: '1.1em solid rgba(0,0,0, 0.2)',
    borderLeft: '1.1em solid #000000',
    borderRadius: '50%',
    transform: 'translateZ(0)',
    animation: '$load8 1s infinite linear',
    '&:after': {
      borderRadius: '50%',
      width: '10em',
      height: '10em'
    } 
  },
  '@keyframes load8': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  } 
};

class Loader extends React.Component {
  render() {
    return(
      <div className={this.props.classes.loader}>Loading...</div>
    )
  }
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(style)(Loader);