import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import OrgList from '../containers/orgs_list'
import {Link} from 'react-router-dom';

export default class SignIn extends Component {
  render() {
    return (
          <div id="loginpg" className=" center logincontainer animated bounceInRight">
            <div className="row">
                <p>Thank you for your generosity. Details pertaining to your contribution are listed below.<br /><br /><span className="right">- RAK</span></p>
                <div id="receipts"></div>
                <Link to='/donation-portal' className="btn waves-effect waves-light">My Donation History</Link>
                <Link to='/' className="btn waves-effect waves-light">Home</Link>
            </div>
          </div>
    );
  }
}
