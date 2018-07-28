import React from 'react';
import ReactDOM from 'react-dom';
//Import all additional packages
import 'bootstrap/dist/css/bootstrap.min.css'
//Import modules in src folder
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
