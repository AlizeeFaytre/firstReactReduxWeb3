import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/Header'
import './App.css';
import DataBlockchain from './components/DataBlockchain';
import PropTypes from 'prop-types'

class App extends Component {

  render() {
    return (
        <div>
            <Header/>
            <DataBlockchain/>
        </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
