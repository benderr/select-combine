//import 'babel-polyfill';
import React from 'react'
import {render} from 'react-dom'
//import Page from './Page'
import {AppRedux} from '../src/AppRedux'

require(__STYLES__);

render((<AppRedux/>), document.getElementById('container'));
