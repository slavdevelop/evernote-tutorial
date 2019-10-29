import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyCHpYwgIK6HDswyxraGbMYymFy03j8dKdk',
  authDomain: 'evernote-tutorial-98119.firebaseapp.com',
  databaseURL: 'https://evernote-tutorial-98119.firebaseio.com',
  projectId: 'evernote-tutorial-98119',
  storageBucket: 'evernote-tutorial-98119.appspot.com',
  messagingSenderId: '830168491859',
  appId: '1:830168491859:web:2e99c960933073901de3a6',
  measurementId: 'G-5T183N59NQ'
});

firebase.analytics();

ReactDOM.render(<App />, document.getElementById('evernote-container'));
