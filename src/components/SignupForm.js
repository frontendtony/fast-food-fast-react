import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <div className="auth section">
      <form className="raised signup form default-form" action="https://fast-food-fast-adc.herokuapp.com/api/v1/auth/signup">
        <h2 className="form-title">Sign Up</h2>
        <input className="input" type="email" name="email"  placeholder='Email' required />
        <input className="input" type="password" name="password"  placeholder='Password' required />
        <input className="input" type="text" name="address"  placeholder='Address' required />
        <input className="input" type="password" name="admin_secret"  placeholder='Enter secret key for admin signup' />
        <input type="submit" value="Register" className="raised" />
      </form>
      <p>
        <span className="emphasis">Already have an account? </span>
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignupForm;
