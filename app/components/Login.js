import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import OrgList from '../containers/orgs_list'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
        <div>
          <h2>About Us</h2>
          <button>see all organizations</button>
        </div>
      </div>
    );
  }
}
