import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
