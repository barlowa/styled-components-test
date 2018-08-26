import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux 
import App from './pages/App'
import { Provider } from 'react-redux'
//CSS
import './css/App.css'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'
//react router

//main render 
ReactDOM.render(
  <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />  
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
