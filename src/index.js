import '@babel/polyfill';
import 'markup-common/markup/stylus/buttons.styl';
import 'markup-common/markup/stylus/blocks.styl';
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

render(React.createElement(App), document.getElementById('container'));
