import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';
import LogoImg from '../../public/assets/imgs/rak-logo.jpg';


export default class Donation extends Component {
  render() {
    return (
      <div>
        <div className="container donationcontainer">
          <h2 className="headerbg padding center">Match Me</h2>
          <p>
            Based on your interests, we've selected the following charity as your first
            choice. If you'd like to explore other choices please click on the right arrow, otherwise
            click on the organization title to contribute.
          </p>
          <div id="randomcharity">
          </div>
          <div className="row">
            <div className="col m6 padding">
              <i className="material-icons left purplearrow">arrow_back</i>
            </div>
            <div className="col m6 padding">
              <i className="material-icons right purplearrow">arrow_forward</i>
            </div>
          </div>
          <div className="center">
            <img className="smallimg" src={LogoImg} />
          </div>
        </div>
        <div className="paddingtwo center">
          <button id="charitydonate" className="btn waves-effect waves-light" type="submit" name="action">Donate
              <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}
