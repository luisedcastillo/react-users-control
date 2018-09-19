import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store';

ReactDOM.render((
    /* jshint ignore:start */ // JSX is not supported
    <Provider store={store}>
        <App />
    </Provider>
    /* jshint ignore:start */ // JSX is not supported
    ), document.getElementById('root'));
registerServiceWorker();
