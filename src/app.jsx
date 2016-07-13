import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Main } from 'containers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import reducer from 'modules/reducer';

import 'normalize.css/normalize.css';

const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(logger)
);

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);