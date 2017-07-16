import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import OrgList from '../containers/orgs_list'

export default class Organizations extends Component {
  render() {
    return (
      <div>
      <div className="container">
<br />
<div className="signupcontainer center">
        <h1>Charity Search</h1>
        <SearchBar />
        <OrgList />
              </div>
</div>
      </div>
    );
  }
}
