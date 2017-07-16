import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { createBrowserHistory } from 'history'
import reducers from './reducers';
import Materialize from 'materialize-css';
import Css from './css/styles.css';
import Main from './components/Main';
// import components for react-router-dom routes
import Login from './components/Login';
import Organizations from './components/Organizations';
import SignIn from './components/Sign_in';
import SignUp from './components/Sign_up';
import DonationCriteria from './components/Donation_criteria';
import Donation from './components/Donation';
import DonationSuccess from './components/Donation_success';
import DonationFail from './components/Donation_fail';
import DonationPortal from './components/Donation_portal';
import DonationReceipts from './components/Donation_receipts';
import Index from './components/Index';
import Profile from './components/Profile';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//react-router-dom routes
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter history={createBrowserHistory()}>
      <div>
        <Main />
        <Route path="/index" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/organizations" component={Organizations} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/donation-criteria" component={DonationCriteria} />
        <Route path="/donation" component={Donation} />
        <Route path="/donation-success" component={DonationSuccess} />
        <Route path="/donation-fail" component={DonationFail} />
        <Route path="/donation-portal" component={DonationPortal} />
        <Route path="/donation-receipts" component={DonationReceipts} />
        <Route path='/profile' component={Profile} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'));
