import * as firebase from 'firebase'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB3FbSK0Ke3AzWv7wY6YroKRNnvDEkDZ98",
    authDomain: "react-firebase-crud-rfc.firebaseapp.com",
    databaseURL: "https://react-firebase-crud-rfc.firebaseio.com",
    projectId: "react-firebase-crud-rfc",
    storageBucket: "react-firebase-crud-rfc.appspot.com",
    messagingSenderId: "905054142830",
    appId: "1:905054142830:web:02fb9b1390a3590f7b017f",
    measurementId: "G-DBT7H2DEDG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();