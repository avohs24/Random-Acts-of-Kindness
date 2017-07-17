import React, {Component} from 'react';
import SearchBar from '../containers/search_bar'
import OrgList from '../containers/orgs_list'

export default class Organizations extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <br/>
          <div className="signupcontainer center">
            <h3 className="headerbg">Charity Search</h3>
            <SearchBar/>
            <OrgList/>
          </div>
        </div>
      </div>
    );
  }
}
