import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from '../store';

import '../styles/index.css';

import Header from './Header';
import Landing from '../components/Landing';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Menu from '../components/Menu';

const store = configureStore();
const addCommaToNum = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/login" render={() => <LoginForm />} />
            <Route exact path="/signup" render={() => <SignupForm />} />
            <Route 
              exact path="/menu" 
              render={() => <Menu addCommaToNum={addCommaToNum}/>} />
            <Route exact path="/" render={() => <Landing />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
