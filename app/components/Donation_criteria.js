import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';
import {Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {term, generateDonation} from '../actions';

class Criteria extends Component {
  constructor(props){
    super(props);
    // this.state = {term: ''};
    // // bind this context
    // this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(values) {
    //TODO: implement front-end validation to make sure that data is clean b4 being posted (avoid Sequelize errors in console and gracefully fail)
    this.props.generateDonation(values, () => {
      this.props.history.push('/donation');
    });
  }

  renderField(field) {
    return (
      <div className='col m3'>
        <p>
          <input
            type='checkbox'
            id={field.id}
            {...field.input}
          />
          <label htmlFor={field.htmlFor}>{field.label}</label>
        </p>
      </div>
    )
  }

  renderAmountField(field) {
    return (
      <div className='col m3'>
        <p>
          <input
            type='text'
            placeholder="0.00"
            {...field.input}
          />
          {field.meta.touched ? field.meta.error : ''}
          <label htmlFor={field.htmlFor}>{field.label}</label>
        </p>
      </div>
    )
  }

  render() {
    const {fields={donation_amount}, handleSubmit} = this.props;
    return (
      <div className="container" id="profile">
        <h2 className="center headerbg padding">Random Charity Generator</h2>
        <p className="padding">We at <b>Random Acts of Kindness (RAK) </b>would like to thank you in advance for your generosity. You have a
                heart to give to a greater cause to produce an even better outcome. Please follow the instructions below
                to get started:
                </p>
                <ol>
            <li>If you'd like to refine your match, select the categories that you're most interested in donating to.</li>
            <li>Insert the amount you'd like to donate (required).</li>
            <li>Match Me!</li>
          </ol>
          <p className="padding">
            After you've followed these steps, a charity will be displayed based on your interest on the next screen.
                </p>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="row padding center">
            <Field
              name="wildlife"
              id="wildlife"
              htmlFor="wildlife"
              label="wildlife"
              component={this.renderField}/>
            <Field
              name="cancer"
              id="cancer"
              htmlFor="cancer"
              label="cancer"
              component={this.renderField}/>
            <Field
              name="veterans"
              id="veterans"
              htmlFor="veterans"
              label="veterans"
              component={this.renderField}/>
            <Field
              name="leukemia"
              id="leukemia"
              htmlFor="leukemia"
              label="leukemia"
              component={this.renderField}/>
          </div>
          <div className="row padding center">
            <Field
              name="children"
              id="children"
              htmlFor="children"
              label="children"
              component={this.renderField}/>
            <Field
              name="environment"
              id="environment"
              htmlFor="environment"
              label="environment"
              component={this.renderField}/>
            <Field
              name="disaster"
              id="disaster"
              htmlFor="disaster"
              label="disaster"
              component={this.renderField}/>
            <Field
              name="education"
              id="education"
              htmlFor="education"
              label="education"
              component={this.renderField}/>
          </div>
          <div className="row padding center">
            <Field
              name="art"
              id="art"
              htmlFor="art"
              label="art"
              component={this.renderField}/>
            <Field
              name="international"
              id="international"
              htmlFor="international"
              label="international"
              component={this.renderField}/>
            <Field
              name="society"
              id="society"
              htmlFor="society"
              label="society"
              component={this.renderField}/>
            <Field
              name="religion"
              id="religion"
              htmlFor="religion"
              label="religion"
              component={this.renderField}/>
          </div>
          <div className="row padding center">
            <Field
              name="welfare"
              id="welfare"
              htmlFor="welfare"
              label="welfare"
              component={this.renderField}/>
            <Field
              name="civil"
              id="civil"
              htmlFor="civil"
              label="civil"
              component={this.renderField}/>
            <Field
              name="abuse"
              id="abuse"
              htmlFor="abuse"
              label="abuse"
              component={this.renderField}/>
            <Field
              name="homeless"
              id="homeless"
              htmlFor="homeless"
              label="homeless"
              component={this.renderField}/>
          </div>
          <div className="row center">
            <div className="input-field col m12">
              <p className="padding center">Please enter the amount you'd like to contribute.</p>
              <Field
                name="donation_amount"
                component={this.renderAmountField}
                id="dollar-sign"
                className="center validate"
                />
            </div>
          </div>
        <br />
        <div className="center">
          <button id="charitydonate" className="btn waves-effect waves-light" type="submit" name="action">Match Me!
              <i className="material-icons right">send</i>
          </button>
        </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  const reg = new RegExp('^\\d+$');
  console.log(values.donation_amount, reg.test(values.donation_amount));
  if(!values.donation_amount || reg.test(values.donation_amount) === false){
    errors.donation_amount = "Please enter a valid donation amount"
  }
  return errors
}



export default reduxForm({
  form: 'PostNewDonation',
  validate,
  fields: ['donation_amount']
})(
  connect(null, {generateDonation})(Criteria)
);
