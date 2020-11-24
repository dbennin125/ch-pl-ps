import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../Main/Header.jsx';
import NewApp from '../Main/NewApp.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={NewApp} />
        <Route path="/aboutme" component={NewApp} />
      </Switch>
    </Router>
  );
}
