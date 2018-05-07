//import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'

require(__STYLES__);

ReactDOM.render((<Page/>), document.getElementById('container'));
