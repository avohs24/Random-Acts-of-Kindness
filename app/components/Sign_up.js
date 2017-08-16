import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {createUser} from '../actions';

class SignUp extends Component {
  renderField(field) {
    return (
      <div className={field.divClassName}>
        <input className={field.inputClassName} type={field.type} placeholder={field.placeholder} {...field.input}/>
        <label htmlFor={field.htmlFor}>{field.label}</label>
        {field.meta.touched ? field.meta.error : ''}
      </div>
    )
  }

  onSubmit(values) {
    //TODO: implement front-end validation to make sure that data is clean b4 being posted (avoid Sequelize errors in console and gracefully fail)
    this.props.createUser(values, () => {
      this.props.history.push('/donation-criteria');
    });
  }

  render() {
    const {fields:{FirstName, LastName, Address, City, zipCode, UserName, SignupPassword, ConfirmPassword}, handleSubmit} = this.props;
    return (
      <div className="container">

        <div id="signuppage" className="signupcontainer animated bounceInRight">
          <div className="row">
            <form id="signupform" className="col m12" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className="row">
                <Field
                  name='FirstName'
                  id="first_name"
                  type="text"
                  inputClassName="validate"
                  divClassName="input-field col m6"
                  htmlFor="first_name"
                  label="First Name"
                  component={this.renderField}/>
                <Field
                  name='LastName'
                  id="last_name"
                  type="text"
                  inputClassName="validate"
                  divClassName="input-field col m6"
                  htmlFor="last_name"
                  label="Last Name"
                  component={this.renderField}/>
              </div>
              <div className="row">
                <Field name='Address' id="address" type="text" inputClassName="validate" divClassName="input-field col m12" htmlFor="address" label="Address" component={this.renderField}/>
              </div>
              <div className="row">
                <Field name='City' id="city" type="text" inputClassName="validate" divClassName="input-field col m4" htmlFor="city" label="City" component={this.renderField}/>
                <Field name='State' id="state" type="text" inputClassName="validate" divClassName="input-field col m4" htmlFor="state" label="State" component={this.renderField}/>
                <div className="row">
                  <Field name='ZipCode' id="zip_code" type="text" inputClassName="validate" divClassName="input-field col m4" htmlFor="zip_code" label="Zip Code" component={this.renderField}/>
                </div>
              </div>
              <div className="row">
                              <Field
                  name='UserName'
                  id="username"
                  type="text"
                  inputClassName="validate"
                  divClassName="input-field col m6"
                  htmlFor="UserName"
                  label="username"
                  component={this.renderField}/>
                <Field name='SignupPassword' id="sign_up_password" type="password" inputClassName="validate" divClassName="input-field col m12" htmlFor="sign_up_password" label="Signup Password" component={this.renderField}/>
              </div>
              <div className="row">
                <Field name='ConfirmPassword' id="confirm_password" type="password" inputClassName="validate" divClassName="input-field col m12" htmlFor="confirm_password" label="Confirm Password" component={this.renderField}/>
              </div>
              <div className="row center">
                <div className="col m6">
                  <Link to="/signup" id="resetbutton" className="btn waves-effect waves-light" value="Reset Form">Reset
                    <i className="material-icons right">send</i>
                  </Link>
                </div>
                <div className="col m6">
                  <button id="loginsubmit" className="btn waves-effect waves-light" type="submit" name="action" method='POST'>Submit
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

function validate(values) {
 const errors = {};
 const pwReg = new RegExp('^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$');
 console.log(values.SignupPassword, pwReg.test(values.SignupPassword));
 
 if(!values.FirstName){
   errors.FirstName = "Enter a first name"
 }

 if(!values.LastName){
   errors.LastName = "Enter a last name"
 }

 if(!values.Address){
   errors.Address = "Enter a valid address please"
 }

 if(!values.City){
   errors.City = "Enter a valid city"
 }

 if(!values.ZipCode){
   errors.ZipCode = "Enter a valid zip code"
 }

 if(!values.State){
   errors.State = "Enter a valid state"
 }


 if(!values.UserName){
   //TODO make sure that user names are unique
   errors.UserName = "Enter a valid user name"
 }

 if( pwReg.test(values.SignupPassword) === false || !values.SignupPassword ){
   errors.SignupPassword = "Password must contain 8 characters length (2 letters in Upper Case, 1 Special Character (!@#$&*), 2 numerals (0-9), 3 letters in Lower Case) ";
 }

 if(pwReg.test(values.SignupPassword) === true && values.SignupPassword !== values.ConfirmPassword ){
   errors.SignupPassword = "passwords must match";
   errors.ConfirmPassword = "passwords must match";
 }

 return errors;
}

export default reduxForm({
  form: 'PostNewUser',
  fields: ['FirstName', 'LastName', 'Address', 'City', 'ZipCode', 'UserName', 'SignupPassword', 'ConfirmPassword'],
  validate
})(connect(null, {createUser})(SignUp));
