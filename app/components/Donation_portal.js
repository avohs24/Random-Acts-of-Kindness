import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import OrgList from '../containers/orgs_list'

export default class DonationPortal extends Component {
  render() {
    return (
      <div>
        <h1>Donation User Portal</h1>
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
