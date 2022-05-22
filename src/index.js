import React from 'react';
import App from './components/App';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
