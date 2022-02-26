import React from 'react';
import ReactDOM from 'react-dom';
import './themes/App.css';
import './themes/index.css';
import App from './pages/App';
import './pages/Home';
import './pages/About';
import './pages/Skills';
import './pages/Projects';
import './pages/Contact';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

