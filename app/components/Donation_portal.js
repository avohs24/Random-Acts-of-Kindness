import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';
import {Button, Icon, SideNav, SideNavItem} from 'react-materialize';

export default class DonationPortal extends Component {
  render() {
    return (
      <div>
        <div className="center donationcontainer">
          <h2 className="center padding portalcontainer whitefont">Donation History</h2>

          <table>
                      <tbody className="center">

            <tr>
              <th>Date of Donation</th>
              <th>Charity</th>
              <th>Category</th>
              <th>Donation Amount</th>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
