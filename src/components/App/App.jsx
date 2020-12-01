import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SplashContainer } from '../../containers/SplashContainer.jsx';
import { Header } from '../Main/Header.jsx';
import NewApp from '../Main/NewApp.jsx';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { MainContainer } from '../../containers/MainContainer.jsx';

export default function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainContainer} />
          {/* <Route path="/" component={MainContainer} /> */}
          <Route path="/aboutme" component={NewApp} />
          <Route path="/education" component={NewApp} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}
