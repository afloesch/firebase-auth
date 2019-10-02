import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import {create} from 'jss';
import globalPlugin from 'jss-global';
import nestedPlugin from 'jss-plugin-nested';

import style from './style';

const jss = create();
jss.use(globalPlugin());
jss.use(nestedPlugin());

const sheet = jss.createStyleSheet(style).attach();
console.log(sheet);

ReactDOM.render(
  <BrowserRouter>
    <App jss={sheet} />
  </BrowserRouter>,
  document.getElementById('root')
);