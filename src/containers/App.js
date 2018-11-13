import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { authUser, logout } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';

import '../styles/index.css';

import Header from './Header';
import Landing from '../components/Landing';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Menu from '../components/Menu';
import Cart from './Cart';
import Orders from './Orders';

const App = (props) => {
  const addCommaToNum = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const { authUser, error, currentUser, removeError, logout } = props;
  return (
    <Router>
      <div className="container">
        <Header currentUser={currentUser} logout={logout} />
        <Switch>
          <Route exact path="/login" render={() => 
            <LoginForm
              onAuth={authUser} 
              error={error}
              removeError={removeError}
              currentUser={currentUser}
            />}
          />
          <Route exact path="/signup" render={() => 
            <SignupForm 
              onAuth={authUser} 
              error={error} 
              removeError={removeError}
              currentUser={currentUser}
            />}
          />
          <Route exact path="/menu"
            render={() => <Menu addCommaToNum={addCommaToNum}/>}
          />
          <Route exact path="/cart"
            render={() => <Cart addCommaToNum={addCommaToNum}/>}
          />
          <Route exact path='/orders' render={() => <Orders />} />
          <Route exact path="/" render={() => <Landing currentUser={currentUser} />} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { authUser, removeError, logout })(App);
