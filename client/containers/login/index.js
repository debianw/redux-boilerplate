/**
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './login.css';

/**
 *
 */

class LoginContainer extends Component {

  /**
   *
   */

  render() {
    return (
      <form className={styles.root}>
        <h2 className="form-signin-heading">NODe</h2>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

        <div>
          <Link to="/dashboard" className="btn btn-lg btn-primary btn-block" type="submit">Sign in</Link>
        </div>

        <br />

        <div>
          <Link to="/">Forgot Password ?</Link>
        </div>

      </form>
    )
  }

}

//
export default LoginContainer;
