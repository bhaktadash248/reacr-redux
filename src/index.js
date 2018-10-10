import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import Home from './Home';

//redux

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducer/rootReducer'

const store = createStore(rootReducer);

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <Home />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
