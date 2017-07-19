import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import LogoImg from '../../public/assets/imgs/rak-logo.jpg';
import OrgList from '../containers/orgs_list';
import {connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from './Login';
// import { Link } from 'react-router';


export default class Index extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInput(event){
    this.setState({term: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
  }
    render() {
        return (
            <div className="container main">
                <div className="row">
                    <div className="col s12 m5">
                        <div id="cellular">
                            <div className="center" id="cellular-inside">
                                <Link to='/index'><img className="smallimg" src={LogoImg} /></Link>
                                <form onSubmit={this.handleSubmit}>
                                     Interest: <br /><br />
                                    <input id="category" type="text" className="Category" onChange={this.handleInput} value={this.state.term} /><br /><br /><br />
                                </form>
                                <Link id="viewcharity" className="btn waves-effect waves-light" type="submit" to='/organizations'>View Charities
                                    <i className="material-icons right">send</i>
                                </Link>
                            </div>
                            <div id="homebutton">
                            </div>
                        </div>
                        </div>
                    <div className="col s12 m7">
                        <div id="aboutus">
                            <h2>What Is RAK?</h2>
                            <p className="padding">Random Acts of Kindness (RAK) is an organization that allows you the user,
                            to contribute to a random organization of your choice. You can think of us as a gatekeeper who ensures 
                            that your funds go to the right people. We know that given the quantity of organizations that are in need
                            of your help, it can be difficult to choose one. This is where RAK comes in to help you decide. We collect
                            the categories that you're interested in donating to and randomly select one for you. This takes the guesswork,
                            pressure, and indecisiveness out of the equation. If you're ready to donate, we need you to sign up
                            first by clicking on the sign up button. Once you're signed in, you can get started on your 
                            philanthropist journey. Thank you for your time and consideration into promoting a good cause.
                            </p>
                        </div>
                        <div className="row center paddingtwo">
                            <div className="col m4">
                                <Link id="login" className="btn waves-effect waves-light" type="submit" to='/login'>Login
                                     <i className="material-icons right">send</i>
                                </Link>
                            </div>
                            <div className="col m4">
                              <Link id="signup" className="btn waves-effect waves-light" to='/signup'>Sign Up
                                 <i className="material-icons right">send</i>
                              </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
