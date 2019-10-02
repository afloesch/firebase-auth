import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent'
import injectSheet from 'react-jss';

import ErrorIcon from '@material-ui/icons/Error';

const styles = {
  icon: {
    root: {
      verticalAlign: 'middle',
      marginRight: '10px'
    }
  },
  snackbar: {
    anchorOriginTopCenter: {
      top: '0',
      left: '0',
      right: 'inherit',
      transform: 'none',
    },
    root: {
      zIndex: '0',
      position: 'inherit',
    }
  },
  snackbarcontent: {
    root: {
      color: "white",
      background: "#8c0e0e"
    }
  }
};

class ErrorMsg extends React.Component {

  render() {

    let Icon = injectSheet(styles.icon)(ErrorIcon);
    let Wrapper = injectSheet(styles.snackbar)(Snackbar);
    let Content = injectSheet(styles.snackbarcontent)(SnackbarContent);

    return (
      <div>
        <Wrapper anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={true}>
          <Content message={
              <div><Icon /><span>{this.props.children}</span></div>
            } />
        </Wrapper>
      </div>
    )
  }
}

export default ErrorMsg