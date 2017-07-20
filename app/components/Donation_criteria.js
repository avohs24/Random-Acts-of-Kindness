import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';
import {Field, reduxForm } from 'redux-form';


export default class Criteria extends Component {

  render() {
    return (
      <div className="container" id="profile">
        <h2 className="center headerbg padding">Random Charity Generator</h2>
        <p className="padding">We at <b>Random Acts of Kindness (RAK) </b>would like to thank you in advance for your generosity. You have a
                heart to give to a greater cause to produce an even better outcome. Please follow the instructions below
                to get started:
                </p>
                <ol>
            <li>Select the categories that you're most interested in donating to.</li>
            <li>Insert the amount you'd like to donate.</li>
            <li>Click Donate.</li>
          </ol>
          <p className="padding">
            After you've followed these steps, a charity will be displayed based on your interest on the next screen.
                </p>
        <form action="#">
          <div className="row padding center">
            <div className="col m3">
              <p>
                <input type="checkbox" id="wildlife" />
                <label htmlFor="wildlife">Wild Life</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="cancer" />
                <label htmlFor="cancer">Cancer</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="veterans" />
                <label htmlFor="veterans">Veterans</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="leukemia" />
                <label htmlFor="leukemia">Leukemia</label>
              </p>
            </div>
          </div>
          <div className="row padding center">
            <div className="col m3">
              <p>
                <input type="checkbox" id="children" />
                <label htmlFor="children">Children</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="environment" />
                <label htmlFor="environment">Environment</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="disaster" />
                <label htmlFor="disaster">Disaster</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="education" />
                <label htmlFor="education">Education</label>
              </p>
            </div>
          </div>
          <div className="row padding center">
            <div className="col m3">
              <p>
                <input type="checkbox" id="arts" />
                <label htmlFor="arts">Perforrming Arts</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="international" />
                <label htmlFor="international">International</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="society" />
                <label htmlFor="society">Society</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="religion" />
                <label htmlFor="religion">Religion</label>
              </p>
            </div>
          </div>
          <div className="row padding center">
            <div className="col m3">
              <p>
                <input type="checkbox" id="welfare" />
                <label htmlFor="welfare">Welfare</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="civil" />
                <label htmlFor="civil">Civil Rights</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="abuse" />
                <label htmlFor="abuse">Abuse</label>
              </p>
            </div>
            <div className="col m3">
              <p>
                <input type="checkbox" id="homeless" />
                <label htmlFor="homeless">Homeless</label>
              </p>
            </div>
          </div>
          <div className="row center">
            <div className="input-field col m12">
              <p className="padding center">Please enter the amount you'd like to contribute.</p>
              <input id="dollar-sign" type="text" className="center validate" placeholder="$ 0.00" />
            </div>
          </div>
        </form>
        <br />
        <div className="center">
          <button id="charitydonate" className="btn waves-effect waves-light" type="submit" name="action">Donate
              <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}
