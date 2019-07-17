import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppBar from 'material-ui/AppBar';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { makeStyles } from '@material-ui/core/styles';
import logo from './nate.gif';
import './App.css';
import DraftOrder from './components/DraftOrder'
import DraftCountdown from './components/DraftCountdown'
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
      <header className="App-header">
        <AppBar title="TTown and Down 2019"/>
        {DraftCountdown()}
        <Typography variant="h3" color="inherit">
                    Draft Order
                </Typography>
        {new DraftOrder().render()}
        <a class="App-link" target="_blank" href="https://docs.google.com/document/d/1tRySdzzTDuC-Wc6P26meFv4qFWG9hIK4m-VJzf7hcp0/edit?usp=sharing">2017 Draft Grades</a>
        <a class="App-link" target="_blank" href="https://docs.google.com/document/d/1ISAL0bV3sVoob7_-hSR-sO6BuXESdGFFhfI2zOOWx1w/edit?usp=sharing">2018 Draft Grades</a>
        <Typography variant="p" color="inherit">
          More content coming soon...
        </Typography>
      </header>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
