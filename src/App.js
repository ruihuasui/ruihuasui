import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './var.css'
import { Home } from './screens'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
