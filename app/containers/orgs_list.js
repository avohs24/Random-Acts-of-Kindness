import React, { Component } from 'react';
import { connect } from 'react-redux';

//throwing an error, to be resolved after CORS issue.
class OrgList extends Component {
  renderOrgs(orgData){
    console.log(orgData);
    return(
      // <tr>
      //   <td key= ><a href={orgData.url}>{orgData.charityName}</a></td>
      //   <td key=>{orgData.category}</td>
      //   <td key=>{orgData.city}, {orgData.data.state}</td>
      //   <td key=>{orgData.deductibilityCd}</td>
      //   <button><a href={orgData.donationUrl}>donate</a></button>
      // </tr>
      <tr>
        <td>org</td>
        <td>cat</td>
        <td>loc</td>
        <td>deduct</td>
        <td><button>donate</button></td>
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

function mapStateToProps({organizations}){
  return { organizations }
}

export default connect(mapStateToProps)(OrgList)
