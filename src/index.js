// https://www.robinwieruch.de/webpack-advanced-setup-tutorial

//import React from 'react';
//import ReactDOM from 'react-dom';

//const title = 'React with Webpack and Babel';

//console.log(process.env.NODE_ENV)

//ReactDOM.render(<div>{title}</div>, document.getElementById('root'));

import _ from 'lodash';
import printMe from './print.js';

require('./index.html');


function component() {
   const element = document.createElement('div');
   const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack', '666'], ' ');

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());

if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }
//module.hot.accept();
