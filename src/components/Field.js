import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import injectSheet from 'react-jss';

const style = {
  field: {}
}

class Field extends React.Component {

  render() {

    return(
      <div>
      <TextField
        required={this.props.required}
        id={this.props.id}
        label={this.props.label}
        type={this.props.type}
        classes={{
          root: this.props.classes.field
        }}
        onChange={(evt) => {this.props.onChange(evt)}}
        value={this.props.value}
        variant='outlined'
      />
      </div>
    )
  }
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool.isRequired
};

export default injectSheet(style)(Field);