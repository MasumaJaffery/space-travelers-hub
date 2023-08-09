import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './components/Redux/Store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
