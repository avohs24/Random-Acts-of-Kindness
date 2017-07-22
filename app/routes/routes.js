import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

// Components
import Login from '../components/Login';
import Logout from '../components/Logout';
import Organizations from '../components/Organizations';
import SignUp from '../components/Sign_up';
import DonationCriteria from '../components/Donation_criteria';
import Donation from '../components/Donation';
import DonationSuccess from '../components/Donation_success';
import DonationFail from '../components/Donation_fail';
import DonationPortal from '../components/Donation_portal';
import DonationReceipts from '../components/Donation_receipts';
import Index from '../components/Index';
import Main from '../components/Main';

const routes = () => (
  <BrowserRouter history={createBrowserHistory()}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/organizations" component={Organizations} />
      <Route path="/signup" component={SignUp} />
      <Route path="/donation-criteria" component={DonationCriteria} />
      <Route path="/donation" component={Donation} />
      <Route path="/donation-success" component={DonationSuccess} />
      <Route path="/donation-fail" component={DonationFail} />
      <Route path="/donation-portal" component={DonationPortal} />
      <Route path="/donation-receipts" component={DonationReceipts} />
      <Route path="/index" component={Index} />
      <Route path="/" component={Index} />
    </Switch>
  </BrowserRouter>

);

export default routes;
