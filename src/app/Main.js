import React from 'react';
import { Switch, Route } from "react-router-dom";
import Admincp from './modules/admincp';
import App from './App';
import Home from './modules/home';
import { withAuthentication } from '../app/utils/session';

function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admincp" component={Admincp} />
      <Route path="/*" component={App} />
    </Switch>
  )
}

export default withAuthentication(Main);
