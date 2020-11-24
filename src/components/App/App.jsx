import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SplashContainer } from '../../containers/SplashContainer.jsx';
import { Header } from '../Main/Header.jsx';
import NewApp from '../Main/NewApp.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <Route path="/aboutme" component={NewApp} />
      </Switch>
    </Router>
  );
}
