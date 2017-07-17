import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';
import {Field, reduxForm } from 'redux-form';

class SignIn extends Component {
  renderField(field){
    return(
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className = 'form-control'
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <div id="loginpg" className=" center logincontainer animated bounceInDown">
        <div className="row">
          <form id="loginform" className="col s12">
            <Field
              label = 'Username'
              name = 'username'
              component={this.renderField}
            />
          </form>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock outline</i>
                <input id="password" type="password" className="validate"/>
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

export default reduxForm({
  form: 'PostNewForm'
})(SignIn);
