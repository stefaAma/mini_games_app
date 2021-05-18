import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Parallax} from './parallax';
import {Content} from "./content";

ReactDOM.render(
  <>    
    <Parallax />
    <Content />
  </>,
  document.getElementById('root'));
