import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { createBrowserHistory } from 'history'
import reducers from './reducers';
import Materialize from 'materialize-css'
import Css from './css/styles.css';
import Main from './components/Main';
import Login from './components/Login';
import Organizations from './components/Organizations';
import SignIn from './components/Sign_in';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter history={createBrowserHistory()}>
      <div>
        <Main />
        <Route path="/login" component={Login} />
        <Route path="/organizations" component={Organizations} />
        <Route path="/signin" component={SignIn} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'));
