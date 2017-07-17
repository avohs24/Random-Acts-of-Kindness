import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import OrgList from '../containers/orgs_list'

export default class SignIn extends Component {
  render() {
    return (
          <div id="loginpg" className=" center logincontainer animated bounceInDown">
            <div className="row">
              <form id="loginform" className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">person</i>
                    <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                    <label for="icon_prefix2">Username</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">lock outline</i>
                    <input id="password" type="password" className="validate" />
                    <label for="password">Password</label>
                  </div>
                </div>
                <div className="row center">
                  <div className="col m4">
                    <button id="loginsubmit" className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
              </button>
                  </div>
                  <div className="col m4">
                    <button id="resetbutton" className="btn waves-effect waves-light" onclick="resetFunc" value="Reset Form" name="action">Reset
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
