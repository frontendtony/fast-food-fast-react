import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => {
  const { currentUser: { user: { name }, isLoggedIn } } = props;
  return (
    <div className='main-section section landing'>
    {
      isLoggedIn
      ? <h1 className="title">
          Welcome back { name.split(' ')[0] }!
        </h1>
      : <div>
          <h1 className="title">Order intercontinental dishes online!</h1>
          <p className="subtitle">One hour delivery to any location in Lagos</p>
          <div className="horizontal button-group">
            <button className="large inverted transparent confirm button">
              <Link to="/login">Login</Link>
            </button>
            <button className="large inverted transparent confirm button">
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </div>
    }
      
    </div>
  );
}

export default Landing;
