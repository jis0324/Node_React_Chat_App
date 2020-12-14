import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // added
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <Router>
      <App />
  </Router>
  , document.getElementById('root')
);
