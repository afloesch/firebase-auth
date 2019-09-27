import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import CreateAccount from './pages/CreateAccount';
import Auth from './pages/Auth'

function App(props) {

  return (
    <div className={props.jss.classes.app}>
      <div className={props.jss.classes.container}>
        <Switch>
          <Route exact path="/" render={() => <Login jss={props.jss} />} />
          <Route exact path="/login" render={() => <Login jss={props.jss} />} />
          <Route exact path="/reset" render={(location) => <ResetPassword jss={props.jss} location={location} />} />
          <Route path="/create" exact component={CreateAccount} />
          <Route exact path="/auth" render={(location) => <Auth jss={props.jss} location={location} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;