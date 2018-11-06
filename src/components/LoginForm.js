import React from 'react';
import '../styles/login.css';

const LoginForm = () => {
  return (
    <div className="section">
      <form className='raised default-form'>
        <h2 className="form-title">Login</h2>
        <input type="text" name="username" placeholder="Username" required autoComplete="off" />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Login" />
      </form>
      <p className="emphasis"><a href="register.html">Or create a new account</a></p>
    </div>
  );
}

export default LoginForm;
