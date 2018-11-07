import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='main-section section landing'>
      <h1 className="title">Order intercontinental dishes online!</h1>
      <p className="subtitle">One hour delivery to any location in Lagos</p>
      <div className="horizontal">
        <button className="large inverted transparent confirm button">
          <Link to="/login">Login</Link>
        </button>
        <button className="large inverted transparent confirm button">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default Landing;
