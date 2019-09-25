import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import MaterialLink from '@material-ui/core/Link';

const style = {
  link: {}
};

class Link extends React.Component {

  render() {

    return(
      <MaterialLink 
        href={this.props.href} 
        target={this.props.target}
        classes={{
          root: this.props.classes.link
        }}
        style={this.props.style}
      >{this.props.children}</MaterialLink>
    );
  }
}

Link.propTypes = {
  classes: PropTypes.object.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  style: PropTypes.object
}

export default injectSheet(style)(Link)