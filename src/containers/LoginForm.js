import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
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
    this.props.onAuth(this.state, 'login')
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
    const { email, password } = this.state;
    history.listen(() => {
      removeError();
    })
    return (
      <div className="auth section">
        <form className='raised login form default-form' onSubmit={this.handleSubmit}>
          <h2 className="form-title">Login</h2>
          <input value={email} className="input" type="email"
            name="email" placeholder="Email" required autoComplete="off"
            onChange={this.handleChange}
          />
          <input value={password} className="input" type="password"
            name="password" placeholder="Password" required
            onChange={this.handleChange}
          />
          <input type="submit" value="Login" />
          {
            error && <p className="form-error emphasis">{error}</p>
          }
        </form>
        <p>
          <Link to="/signup">Create a new account</Link>
        </p>
      </div>
    );
  }
  
}

export default withRouter(LoginForm);
