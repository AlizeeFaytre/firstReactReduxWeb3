import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import fetchData from './components/reducers';
import Root from './Root';

let store = createStore(fetchData);

ReactDOM.render(
    <Root store={store}></Root>
    , document.getElementById('root'));

registerServiceWorker();
