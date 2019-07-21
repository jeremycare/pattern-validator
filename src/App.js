import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components'

import './App.css';
import { Page } from './Page.js';

const AppHeader = styled.div`
background-color: #282c34;
min-height: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

const App = () => {
  return (
    <div className="App">
      <AppHeader>
        <span>POC: pattern-validator input check by Jeremy Care</span>
      </AppHeader>
      <Page />
    </div>
  );
}

export default App;
