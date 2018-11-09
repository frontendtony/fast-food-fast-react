import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      address: '',
      admin_secret: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const { currentUser : { isLoggedIn }, history } = this.props;
    if (isLoggedIn) history.push('/');
  }

  handleChange(e) {
    e.preventDefault();
    this.props.removeError();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAuth(this.state, 'signup')
      .then(() => {
        const { currentUser : { user: { isadmin } }, history } = this.props;
        if (isadmin) {
          return history.push('/admin');
        }
        history.push('/');
      })
  }

  render() {
    const { error, history, removeError } = this.props;
    const { name, email, password, address, admin_secret } = this.state;
    history.listen(() => {
      removeError();
    })
    return (
      <div className="auth section">
        <form className="raised signup form default-form" onSubmit={this.handleSubmit}>
          <h2 className="form-title">Sign Up</h2>
          <input value={name} className="input" type="text"
            name="name"  placeholder='Full name' required
            onChange={this.handleChange}
          />
          <input value={email} className="input" type="email"
            name="email"  placeholder='Email' required
            onChange={this.handleChange}
          />
          <input value={password} className="input" type="password"
            name="password"  placeholder='Password' required
            onChange={this.handleChange}
          />
          <input value={address} className="input" type="text"
            name="address"  placeholder='Address' required
            onChange={this.handleChange}
          />
          <input value={admin_secret} className="input" 
            type="password" name="admin_secret" 
            placeholder='Enter secret key for admin signup'
            onChange={this.handleChange}
          />
          <input type="submit" value="Register" className="raised" />
          {
            error && <p className="form-error emphasis">{error}</p>
          }
        </form>
        <p>
          <span className="emphasis">Already have an account? </span>
          <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(SignupForm);
