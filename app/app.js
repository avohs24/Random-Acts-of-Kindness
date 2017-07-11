import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//figure out how to load materialize css or sass
// import Materialize from 'whatever materialize folder we download...?';
import reducers from './reducers';
import Css from './css/styles.css';
import Main from './components/Main';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Main />
  </Provider>
  , document.getElementById('app'));
