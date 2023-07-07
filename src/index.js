import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./redux/store/store";
import AppRouter from './router/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  </React.StrictMode>
);


