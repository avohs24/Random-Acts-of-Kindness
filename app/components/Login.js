import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';
import {Field, reduxForm } from 'redux-form';

class SignIn extends Component {
  renderField(field){

    return(
        // <div className="row">
        //   <div className="input-field col s6">
        //     <i className="material-icons prefix">person</i>
        //     <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
        //     <label htmlFor="icon_prefix2">{field.label}</label>
        //   </div>
        // </div>
        <div className='input-field col s6'>
          <i className="material-icons prefix">{field.icon}</i>
          <label htmlFor={field.htmlFor}>{field.label}</label>
          <input
            className = {field.className}
            type={field.type}
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
            {/* TODO: only hover on underline activates form */}
            <Field
              label = "Username"
              name = "username"
              icon = 'person'
              htmlFor="icon_prefix2"
              className = 'validate'
              component={this.renderField}
            />
            <Field
              label = "Password"
              name = "password"
              htmlFor="password"
              icon = 'lock outline'
              component={this.renderField}
            />
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
      // <div id="loginpg" className=" center logincontainer animated bounceInDown">
      //   <div className="row">
      //     <form id="loginform" className="col s12">
      //       <Field
      //         label = 'Username'
      //         name = 'username'
      //         component={this.renderField}
      //       />
      //     </form>
      //   </div>
      //   <div className="row">
      //     <form className="col s12">
      //       <div className="row">
      //         <div className="input-field col s6">
      //           <i className="material-icons prefix">lock outline</i>
      //           <input id="password" type="password" className="validate"/>
      //           <label for="password">Password</label>
      //         </div>
      //       </div>
      //       <div className="row center">
      //         <div className="col m4">
      //           <button id="loginsubmit" className="btn waves-effect waves-light" type="submit" name="action">Submit
      //             <i className="material-icons right">send</i>
      //           </button>
      //         </div>
      //         <div className="col m4">
      //           <button id="resetbutton" className="btn waves-effect waves-light" onclick="resetFunc" value="Reset Form" name="action">Reset
      //             <i className="material-icons right">send</i>
      //           </button>
      //         </div>
      //       </div>
      //     </form>
      //   </div>
      // </div>
    );
  }
}


export default reduxForm({
  form: 'PostNewForm'
})(SignIn);
