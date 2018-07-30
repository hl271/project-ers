import React from 'react';
import ReactDOM from 'react-dom';
//Import all additional packages
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import 'bootstrap/dist/css/bootstrap.min.css'

//Import modules in src folder
import rootReducer from './reducer/index'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(reduxThunk, logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
