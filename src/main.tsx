import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAf55aF4s_cIuk9ZfVYxB7RA6bjVW94524",
  authDomain: "honey-3f705.firebaseapp.com",
  projectId: "honey-3f705",
  storageBucket: "honey-3f705.appspot.com",
  messagingSenderId: "801547659567",
  appId: "1:801547659567:web:3eb035bf7bcd3d3868d9da",
  measurementId: "G-G4B68LYTE1"
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
