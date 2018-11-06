import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/login" render={() => <LoginForm />} />
            <Route path="/signup" render={() => <SignupForm />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
