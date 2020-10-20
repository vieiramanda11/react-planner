import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC6UwlbHtN05hHfF1CVhVlgNQpOu9o_bp0",
    authDomain: "planner-react-10a84.firebaseapp.com",
    databaseURL: "https://planner-react-10a84.firebaseio.com",
    projectId: "planner-react-10a84",
    storageBucket: "planner-react-10a84.appspot.com",
    messagingSenderId: "177848821960",
    appId: "1:177848821960:web:2eeb557849b25bccbe9dfd",
    measurementId: "G-EX4NS0CWT6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;