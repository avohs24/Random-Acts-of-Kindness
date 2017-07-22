import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import _ from 'lodash';
import LogoImg from '../../public/assets/imgs/rak-logo.jpg';

class Donation extends Component {
  componentDidMount(){
  }

  random(arr){
    Math.floor(Math.random() * (arr.criteria.length))
  }

  render() {
    const orgObj = (_.pick(this.props.donation[0], [Math.floor(Math.random() * (20))]))
    const orgIndex = _.keysIn(orgObj)
    const org = orgObj[orgIndex]
    if(this.props.donation.length < 1){
      return <h1><Link to='donation-criteria'>Please enter your criteria to see a match</Link></h1>
    }
    return (
      <div>
        <div className="container donationcontainer">
          <h2 className="headerbg padding center">Match Me</h2>
          <p>
            Based on your interests, we've selected the following charity as your first
            choice. If you'd like to explore other choices please click on the right arrow, otherwise
            click on the organization title to contribute.
          </p>
          <div id="randomcharity" className="center">
            <h3>{org.charityName}</h3>
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

function mapStateToProps({donation}){
  return { donation }
}

export default connect(mapStateToProps)(Donation)
