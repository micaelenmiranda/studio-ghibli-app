import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './../App';
import Single from './Single/Single';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ App } exact />
      <Route path="/movie/:id" component={ Single }/>
    </Switch>
  </BrowserRouter>
)

export default Router
