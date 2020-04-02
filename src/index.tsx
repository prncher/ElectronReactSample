import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// Import the styles here to process them with webpack
import './App.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
