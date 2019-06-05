import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import weatherApp from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    weatherApp,    
    composeEnhancers( applyMiddleware(sagaMiddleware) )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>        
        <BrowserRouter>
            <App />
        </BrowserRouter>        
    </Provider>,
    document.getElementById('root')
);