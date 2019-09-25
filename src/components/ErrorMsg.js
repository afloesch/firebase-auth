import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/styles';

import Error from '@material-ui/icons/Error';

const styles = {
  root: {
    padding: '5px',
    margin: '10px 0',
    fontSize: 14,
    border: '1px #9e0808 solid',
    color: '#9e0808',
    textAlign: 'left'
  },
};

class ErrorMsg extends React.Component {

  render() {
    return (
      <Card className={this.props.classes.root}>
        <table>
          <tbody>
            <tr>
              <td>
                <Error style={{float: 'left'}}/>
              </td>
              <td>
                {this.props.children}
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    );
  }
}

ErrorMsg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorMsg)