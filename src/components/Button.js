import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import injectSheet from 'react-jss';

const styles = {
  button: {}
}

class Btn extends React.Component {

  render() {
    return(
      <Button 
        type={this.props.type} 
        variant="contained" 
        classes={{
          root: this.props.classes.button
        }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Button>
    )
  }
}

Btn.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default injectSheet(styles)(Btn);