import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import OrgList from '../containers/orgs_list'

export default class Criteria extends Component {
  render() {
    return (
      <div>
        <h1>Donation Criteria Page</h1>
        <div>
          <input placeholder='username'></input>
          <input placeholder='password'></input>
        </div>
        <div>
          <button>submit</button>
        </div>
      </div>
    );
  }
}
