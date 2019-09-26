import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

const style = {
  link: {}
};

class CoreLink extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired
  }

  render() {
    return (
      <Link to={this.props.href} className={this.props.className} style={this.props.style}>{this.props.children}</Link>
    )
  }
}

class StyledLink extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    href: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    const link = CoreLink;
    
    return(
      <MaterialLink
        component={link}
        href={this.props.href}
        classes={{
          root: this.props.classes.link
        }}
        style={this.props.style}
      >{this.props.children}</MaterialLink>
    );
  }
}

export default injectSheet(style)(StyledLink)