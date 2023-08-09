import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './components/Redux/Store';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
