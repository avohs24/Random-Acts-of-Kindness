import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Index extends Component {
    render() {
        return (
          <div className="container" id="profile"><br>
            <div className="row">
              <div className="col m4">
                <img className="left smallimg" src="../public/assets/imgs/placeholder-user-photo.png"></img>
                <h2 className="left">My Profile<span id="welcomeuser"></span></h2>
              </div>
              <div className="col m8">
                <div className="right"><a class="waves-effect waves-light btn"><i class="material-icons left">payment</i>Donation History</a></div>
              </div>
            </div>
            <p className="left">Name:&nbsp;<span id="profilename"></span><br><br><br>
            Street Address:&nbsp;<span id="profileaddress"></span><br><br><br>
            City:&nbsp;<span id="profilecity"></span><br><br><br>
            State:&nbsp;<span id="profilestate"></span><br><br><br>
            Zip Code:&nbsp;<span id="profilezip"></span><br><br><br></br></p>
          </div>
