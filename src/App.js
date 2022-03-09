import React from 'react';
import './styles/main.scss';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/sign-in/SignIn';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';
import Shopping from './pages/shopping/Shopping';
import Cart from './pages/cart/Cart';
import Controls from './pages/controls/Controls';

//firebase
import { db } from './firebase';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login/:userType' component={SignIn} />
          <Route exact path='/shopping' component={Shopping} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/controls' component={Controls} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
