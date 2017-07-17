import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import ReactDOM from 'react-dom';
import LogoImg from '../../public/assets/imgs/rak-logo.jpg';

export default class Index extends Component {
    render() {
        return (
          <body className="profilebg"><br /><br />
          <div className="container" id="profile">
            <div className="row">
              <div className="col m4">
                <h2 className="left">My Profile<span id="welcomeuser"></span></h2>
              </div>
              <div className="col m8"><br />
                <div className="right"><a className="waves-effect waves-light btn"><i className="material-icons left">payment</i>Donation History</a></div>
              </div>
              </div>
              <div className="row">
              <div className="col m12">
            <p className="left padding">Name:<span id="profilename"></span><br /><br /><br />
            Street Address:<span id="profileaddress"></span><br /><br /><br />
            City:<span id="profilecity"></span><br /><br /><br />
            State:<span id="profilestate"></span><br /><br /><br />
            Zip Code:<span id="profilezip"></span><br /><br /><br /><br /></p>

</div>
</div>
</div>
</body>
        );
    }
}