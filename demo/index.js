//import 'babel-polyfill';
import React from 'react'
import {render} from 'react-dom'
//import Page from './Page'
import {AppRedux} from '../src/AppRedux'

import 'markup-common/markup/stylus/buttons.styl'
import 'markup-common/markup/stylus/blocks.styl'

render((<AppRedux/>), document.getElementById('container'));
