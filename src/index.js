import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import App from './App';
import { loadWeatherData } from './actions/index';
import weatherApp from './reducers/index';
import loading from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'root',
    storage,
  };  
const persistedReducer = persistReducer(persistConfig, weatherApp)
const store = createStore(
    persistedReducer,    
    composeEnhancers( applyMiddleware(sagaMiddleware) )
);
const persistor = persistStore(store);

sagaMiddleware.run(loading);

store.dispatch(loadWeatherData());


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>        
    </Provider>,
    document.getElementById('root')
);