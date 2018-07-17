import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyApLc7PnuBH4pE8KUZFlJlt6lKpp_rHtgA",
  authDomain: "kristof-kelemen-todo-app.firebaseapp.com",
  databaseURL: "https://kristof-kelemen-todo-app.firebaseio.com",
  projectId: "kristof-kelemen-todo-app",
  storageBucket: "kristof-kelemen-todo-app.appspot.com",
  messagingSenderId: "624093161717"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Kristof',
    age: 24
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Feed the cactus twice'
});
todosRef.push({
  text: 'Walk the fish again'
});
