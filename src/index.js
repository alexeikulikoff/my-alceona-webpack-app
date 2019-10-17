// https://www.robinwieruch.de/webpack-advanced-setup-tutorial

//import React from 'react';
//import ReactDOM from 'react-dom';

//const title = 'React with Webpack and Babel';

//console.log(process.env.NODE_ENV)

//ReactDOM.render(<div>{title}</div>, document.getElementById('root'));

//import _ from 'lodash';
import printMe from './print.js';
import React from 'react';
import ReactDOM from 'react-dom'
import { App } from './app'

require('./index.html');


 ReactDOM.render(<App />, document.getElementById('root'))


if (module.hot) {
  module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }

