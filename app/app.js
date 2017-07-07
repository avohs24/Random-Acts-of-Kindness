import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
//figure out how to load materialize css or sass
// import Materialize from 'whatever materialize folder we download...?';
import Css from './css/styles.css';
import Main from './components/Main';


ReactDOM.render(<Main />, document.getElementById('app'));
