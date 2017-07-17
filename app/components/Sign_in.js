import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import OrgList from '../containers/orgs_list'

export default class SignIn extends Component {
  render() {
    return (
          <div id="loginpg" className="center logincontainer animated bounceInDown">
            <div className="row">
              <form id="loginform" className="col m12">
                <div className="row">
                  <div className="input-field col m12">
                    <i className="material-icons prefix">person</i>
                    <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                    <label htmlFor="icon_prefix2">Username</label>
                  </div>
                </div>
            <div className="row">
                  <div className="input-field col m12">
                    <i className="material-icons prefix">lock outline</i>
                    <input id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col m6">
                    <button id="loginsubmit" className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="col m6">
                  <button id="resetbutton" className="btn waves-effect waves-light" value="Reset Form" type="reset"  name="action">Reset
                  <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
            </div>
          </div>
    );
  }
}
