import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import App from './App';
import Single from './Single';

ReactDOM.render(
    <Router>
        <Switch>
          <Route exact path="/" component= { App } />
          <Route path="/single" component={ Single } />
        </Switch>
    </Router>,
  document.getElementById('root')
);

