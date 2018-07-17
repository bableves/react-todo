import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDaGGwzcpROAdl0gG-pxOtBDSTrhH6r330",
  authDomain: "todo-app-4da4f.firebaseapp.com",
  databaseURL: "https://todo-app-4da4f.firebaseio.com",
  projectId: "todo-app-4da4f",
  storageBucket: "todo-app-4da4f.appspot.com",
  messagingSenderId: "13456764082"
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
