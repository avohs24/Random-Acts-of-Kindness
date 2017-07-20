import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import LogoImg from '../../public/assets/imgs/rak-logo.jpg';
import OrgList from '../containers/orgs_list';

export default class Main extends Component {
  render() {
    return (

      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="row">
              <div className="col m1">
                <a href="#" className="brand-logo"><img className="smallimg" src={LogoImg}/></a>
              </div>
              <div className="col m11">
                <p className="center arima"><span className="textcolor3">R</span>andom<span className="textcolor1">&nbsp;A</span>cts&nbsp;of&nbsp;<span className="textcolor2">K</span>indness<br/></p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
