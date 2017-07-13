import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import OrgList from '../containers/orgs_list'

export default class Organizations extends Component {
  render() {
    return (
      <div>
        <h1>Organizations Page</h1>
        <SearchBar />
        <OrgList />
      </div>
    );
  }
}
