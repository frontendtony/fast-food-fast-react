import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="auth section">
      <form className='raised login form default-form'>
        <h2 className="form-title">Login</h2>
        <input className="input" type="email" name="email" placeholder="Email" required autoComplete="off" />
        <input className="input" type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Login" />
      </form>
      <p>
        <Link to="/signup">Create a new account</Link>
      </p>
    </div>
  );
}

export default LoginForm;
