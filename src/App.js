import React from 'react';
import './styles/main.scss';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
