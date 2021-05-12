import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routers/AppRouter';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import './bootstrap';
import './app.css';

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('react-app')
);

