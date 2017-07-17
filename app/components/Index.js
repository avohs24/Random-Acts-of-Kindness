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
                    <div className="col m4">
                        <div id="cellular">
                            <div className="center" id="cellular-inside">
                                <Link to='/index'><img className="smallimg" src={LogoImg} /></Link>
                                <form>
                                    Category Type: <br /><br /><input id="category" type="text" name="Category" value="" /><br /><br /><br />
                                </form>
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
                    <div className="col m8">
                        <div id="aboutus">
                            <h2>What Is RAK?</h2>
                            <p className="padding">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</p>
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
