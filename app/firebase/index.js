import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyApLc7PnuBH4pE8KUZFlJlt6lKpp_rHtgA",
    authDomain: "kristof-kelemen-todo-app.firebaseapp.com",
    databaseURL: "https://kristof-kelemen-todo-app.firebaseio.com",
    projectId: "kristof-kelemen-todo-app",
    storageBucket: "kristof-kelemen-todo-app.appspot.com",
    messagingSenderId: "624093161717"
  };
  firebase.initializeApp(config);
} catch (e) {
  
}

export var firebaseRef = firebase.database().ref();
export default firebase;
