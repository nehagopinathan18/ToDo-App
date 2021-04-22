import firebase from 'firebase';
import "firebase/firestore";
// import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyD8It0jTydV1ntEau6it6PoUNGDVZBYLww",
    authDomain: "todo-9f0c4.firebaseapp.com",
    projectId: "todo-9f0c4",
    storageBucket: "todo-9f0c4.appspot.com",
    messagingSenderId: "422425696574",
    appId: "1:422425696574:web:7573f0d4d8a98469caf46f"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
//This exports the auth module of Firebase, as well as the Google Auth Provider
export default firebase; 