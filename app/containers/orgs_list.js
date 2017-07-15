import React, { Component } from 'react';
import { connect } from 'react-redux';

//throwing an error, to be resolved after CORS issue.
class OrgList extends Component {
  renderOrgs(orgData){
    console.log(orgData);
    return(
      <tr>
        <td key={orgData.ein}><a href={orgData.url}>{orgData.charityName}</a></td>
        <td key={orgData.ein}>{orgData.category}</td>
        <td key={orgData.ein}>{orgData.city}, {orgData.state}</td>
        <td key={orgData.ein}>{orgData.deductibilityCd}</td>
        <button><a href={orgData.donationUrl}>donate</a></button>
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
          {this.props.organizations.map(item => item.map(this.renderOrgs))}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({organizations}){
  return { organizations }
}

export default connect(mapStateToProps)(OrgList)
