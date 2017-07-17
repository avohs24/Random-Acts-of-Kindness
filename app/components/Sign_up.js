import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';


export default class SignUp extends Component {
  render() {
    return (
            <div className="container">

        <div id="signuppage" className="signupcontainer animated bounceInRight">
          <div className="row">
            <form id="signupform" className="col m12">
              <div className="row">
                <div className="input-field col m6">
                  <input placeholder="First Name" id="first_name" type="text" className="validate" />
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field col m6">
                  <input placeholder="Last Name" id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col m12">
                  <input placeholder="Street Address" id="address" type="text" className="validate" />
                  <label htmlFor="address">Street Address</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col m4">
                  <input placeholder="City" id="city" type="text" className="validate" />
                  <label htmlFor="city">City</label>
                </div>
                <div className="input-field col m4">
                  <input placeholder="State" id="state" type="text" className="validate" />
                  <label htmlFor="state">State</label>
                </div>
                <div className="row">
                  <div className="input-field col m4">
                    <input placeholder="Zip Code" id="zip-code" type="text" className="validate" />
                    <label htmlFor="zip-code">Zip Code</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col m12">
                  <input id="signuppassword" type="password" className="validate" />
                  <label htmlFor="signuppassword">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col m12">
                  <input id="confirmpassword" type="password" className="validate" />
                  <label htmlFor="confirmpassword">Confirm Password</label>
                </div>
              </div>
              <div className="row center">
                <div className="col m6">
                  <button id="loginsubmit" className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
              </button>
                </div>
                <div className="col m6">
                  <button id="resetbutton" className="btn waves-effect waves-light" onclick="resetFunc" value="Reset Form" name="action">Reset
              <i className="material-icons right">send</i>
              </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
