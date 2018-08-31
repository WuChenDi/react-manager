import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Life from './pages/demo/Life';
import Admin from './admin';
import Home from './pages/route_demo/route1/Home';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Life />, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
