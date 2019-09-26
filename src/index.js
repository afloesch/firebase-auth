import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import {create} from 'jss';
import globalPlugin from 'jss-global';

import style from './style';

const jss = create();
jss.use(globalPlugin())

const sheet = jss.createStyleSheet(style);
sheet.attach();

ReactDOM.render(
  <BrowserRouter>
    <App jss={sheet} />
  </BrowserRouter>,
  document.getElementById('root')
);