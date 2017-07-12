import React, { Component } from 'react';

export default class OrgList extends Component {
  renderOrgs(orgData){
    return(
      <tr>
        <td><a href={orgData.data.url}>{orgData.data.charityName}</a></td>
        <td>{orgData.data.category}</td>
        <td>{orgData.data.city}, {orgData.data.state}</td>
        <td>{orgData.data.deductibilityCd}</td>
        <button><a href{orgData.data.donationUrl}>donate</a></button>
      </tr>
    )
  }
  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Locations</th>
            <th>Deductablity Code</th>
            <th>Donate</th>
          </tr>
        </thead>
        <tbody>
          {this.props.organizations.map(this.renderOrgs)}
        </tbody>
      </table>
    )
  }
}
