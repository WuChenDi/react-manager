import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Life from './pages/demo/Life';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Life />, document.getElementById('root'));
registerServiceWorker();
