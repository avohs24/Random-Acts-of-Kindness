import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import LogoImg from '../../public/assets/imgs/rak-logo.jpg';
import OrgList from '../containers/orgs_list';
import { Button, Icon, SideNav, SideNavItem } from 'react-materialize';

export default class Main extends Component {
  render() {
    return (

      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="row">
              <div className="col m2">
                <a href="#" className="brand-logo"><img className="smallimg" src={LogoImg} /></a>
              </div>
              <div className="col s3 m8">
                <p className="center arima"><span className="textcolor3">R</span>andom<span className="textcolor1">&nbsp;A</span>cts&nbsp;of&nbsp;<span className="textcolor2">K</span>indness<br /></p>
              </div>
              <div className="col s4 m2 right">
                <SideNav
                  trigger={<Button><i className="center material-icons">menu</i></Button>}
                  options={{ 
                    closeOnClick: true,
                    edge: 'right',
                    menuWidth: 250,
                  }}
                >
                  <SideNavItem userView
                    user={{
                      background: '',
                      image: '',
                      name: '',
                      email: ''
                    }}
                  />
                  <SideNavItem href='/' icon='home'>Home</SideNavItem>
                  <SideNavItem href='/login' icon='person'>Login</SideNavItem>
                  <SideNavItem href='/signup' icon='assignment'>Sign Up</SideNavItem>
                  <SideNavItem href='/organizations' icon='folder'>View Charities</SideNavItem>
                </SideNav>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
