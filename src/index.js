import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import { loadWeatherData } from './actions/index';
import weatherApp from './reducers/index';
import loading from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(weatherApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loading);

store.dispatch(loadWeatherData());


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);