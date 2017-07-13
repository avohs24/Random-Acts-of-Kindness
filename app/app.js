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
import Organizations from './components/Organizations';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter history={createBrowserHistory()}>
      <Switch>
        <Main />
        <Route path="/organizations" component={Organizations} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'));
