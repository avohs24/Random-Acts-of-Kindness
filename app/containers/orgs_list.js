import React, { Component } from 'react';
import { connect } from 'react-redux';

//throwing an error, to be resolved after CORS issue.
class OrgList extends Component {
  //this should empty after each search
  renderOrgs(orgData, i){
    console.log(orgData);
    i++
    return(
      <tr key={`org${i}`}>
        <td><a href={orgData.url}>{orgData.charityName}</a></td>
        <td>{orgData.category}</td>
        <td>{orgData.city}, {orgData.state}</td>
        <td>{orgData.deductibilityCd}</td>
        <td><button><a href={orgData.donationUrl}>donate</a></button></td>
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
