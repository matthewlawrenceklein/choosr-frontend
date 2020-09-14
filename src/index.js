import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers/index'


const firebaseConfig = {
  apiKey: "AIzaSyAal_rNN5Ym4umMAEz2BIhzWq4MRbnM6yY",
  authDomain: "choosr-f4ee6.firebaseapp.com",
  databaseURL: "https://choosr-f4ee6.firebaseio.com",
  projectId: "choosr-f4ee6",
  storageBucket: "choosr-f4ee6.appspot.com",
  messagingSenderId: "236150172306",
  appId: "1:236150172306:web:5d0b69dead78227859944b"
};

firebase.initializeApp(firebaseConfig);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
