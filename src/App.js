import React from "react";
import { Route, Switch } from "react-router-dom";
import {create} from 'jss';
import globalPlugin from 'jss-global';

import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import CreateAccount from './pages/CreateAccount';
import Auth from './pages/Auth'

import style from './style';

const jss = create();
jss.use(globalPlugin())

function App() {
  const sheet = jss.createStyleSheet(style);
  sheet.attach();

  return (
    <Switch>
      <Route exact path="/" render={() => <Login jss={sheet} />} />
      <Route exact path="/login" render={() => <Login jss={sheet} />} />
      <Route exact path="/reset" render={() => <ResetPassword jss={sheet} />} />
      <Route path="/create" exact component={CreateAccount} />
      <Route exact path="/auth" component={Auth} />
    </Switch>
  );
}

export default App;