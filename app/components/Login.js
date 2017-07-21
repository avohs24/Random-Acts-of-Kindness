import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';
import {Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../actions';

class Login extends Component {
  renderField(field){

    return(
        <div className='input-field col m12'>
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

  onSubmit(values) {
    //call action creator to post to api route
    //TODO: see that data being sent by form matches post api route
    //TODO: implement front-end validation to make sure that data is clean b4 being posted (avoid Sequelize errors in console and gracefully fail)
    this.props.loginUser(values, () => {
      this.props.history.push('/donation-criteria');
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div id="loginpg" className="center logincontainer animated bounceInDown">
        <div className="row">
          <form id="loginform" className="col m12" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            {/* TODO: only hover on underline activates form */}
            <Field
              label = "Username"
              name = "username"
              type = "text"
              htmlFor = "username"
              icon = 'person'
              className = "validate"
              component={this.renderField}
            />
            <Field
              label = "Password"
              name = "password"
              type = "password"
              htmlFor="password"
              icon = 'lock outline'
              component={this.renderField}
            />
            <div className="row center">
              <div className="col m6">
                <button id="resetbutton" className="btn waves-effect waves-light" value="Reset Form" name="action">Reset
                  <i className="material-icons right">send</i>
                </button>
              </div>
              <div className="col m6">
                <button id="loginsubmit" className="btn waves-effect waves-light" type="submit" name="action">Submit
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

export default reduxForm({form: 'PostNewLogin'})(connect(null, {loginUser})(Login));
