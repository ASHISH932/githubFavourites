import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MainPage from './components/main.js';
import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <MainPage />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));