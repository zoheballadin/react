import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './Container';
import { Grid } from './Grid';
import './index.css';
import { Position } from './Position';
import { Shadow } from './Shadow';
import { ZIndex } from './ZIndex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shadow />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
