import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Routes from './routes/routes'
import reducers from './reducers';
import Materialize from 'materialize-css';
import Css from './css/styles.css';
import Main from './components/Main';
import {Button, Icon, SideNav, SideNavItem} from 'react-materialize';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//react-router-dom routes
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Main />
      <Routes />
    </div>
  </Provider>
  , document.getElementById('app'));
