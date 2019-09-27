import React from "react";
import { Route, Switch } from "react-router-dom";
import Paper from '@material-ui/core/Paper';

import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import CreateAccount from './pages/CreateAccount';
import Auth from './pages/Auth'

function App(props) {

  return (
    <div className={props.jss.classes.app}>
      <div className={props.jss.classes.container}>
        <Paper className={props.jss.classes.paper}>
          <div>
            <img className={props.jss.classes.logo} src="/img/bw-logo-black.png" alt="Logo" />
          </div>
          <Switch>
            <Route exact path="/" render={() => <Login jss={props.jss} />} />
            <Route exact path="/login" render={() => <Login jss={props.jss} />} />
            <Route exact path="/reset" render={(location) => <ResetPassword jss={props.jss} location={location} />} />
            <Route path="/create" exact component={CreateAccount} />
            <Route exact path="/auth" render={(location) => <Auth jss={props.jss} location={location} />} />
          </Switch>
        </Paper>
      </div>
    </div>
  );
}

export default App;