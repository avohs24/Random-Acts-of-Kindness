import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import LogoImg from '../../public/assets/imgs/rak-logo.jpg';
import { generateDonation } from '../actions/index'

class Donation extends Component {
  componentDidMount(){
  }

  nextClick(){
    const orgObj = (_.pick(this.props.donation[0], [Math.floor(Math.random() * (20))]))
    const orgIndex = _.keysIn(orgObj)
    const org = orgObj[orgIndex];
    // TODO: set current term to state and use to call same category instead of hard code
    this.props.generateDonation(org, ()=> {
      this.props.history.push('/donation');
    })
  }

  random(arr){
    Math.floor(Math.random() * (arr.criteria.length))
  }

  render() {
    const orgObj = (_.pick(this.props.donation[0], [Math.floor(Math.random() * (20))]))
    const orgIndex = _.keysIn(orgObj)
    const org = orgObj[orgIndex];
    if(this.props.donation.length < 1){
      return (
      <div className='row'>
        <h1 className='center'>Please enter your criteria to see a match</h1>
        <Link to='donation-criteria'><button className='paddingtwo center' className="btn waves-effect waves-light">Go back to Criteria</button></Link>
      </div>
      )
    }
    return (
      <div>
        <div className="container donationcontainer">
          <h2 className="headerbg padding center">Is it a Match?</h2>
          <p>
            Based on your interests, we've selected the following charity as your first
            choice. If you'd like to explore other choices please click on the right arrow, otherwise
            click on the organization title to contribute.
          </p>
          <div id="randomcharity" className="center">
            {console.log('org: ',org)}
            <h3><a href={org.url} target='_blank'>{org.charityName}</a></h3>
            <h5>Category: {org.category}</h5>
            <h6>{org.city}, {org.state}</h6>
            <p>{org.missionStatemnt}</p>
            <button className="btn waves-effect waves-light"><a href={org.url} target='_blank'>Website</a></button>
            <div className="paddingtwo center">
              <Link to='donation-success'><button id="charitydonate" className="btn waves-effect waves-light" type="submit" name="action">Donate
                    <i className="material-icons right">send</i>
              </button></Link>
            </div>
          </div>
          <div className="row">
            <div className="col m6 padding">
              <i className="material-icons left purplearrow" onClick = {this.nextClick.bind(this)}>arrow_back</i>
            </div>
            <div className="col m6 padding">
              <i className="material-icons right purplearrow" onClick = {this.nextClick.bind(this)}>arrow_forward</i>
            </div>
          </div>
          <div className="center">
            <img className="smallimg" src={LogoImg} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({donation}){
  return { donation }
}

export default connect(mapStateToProps, { generateDonation })(Donation)
