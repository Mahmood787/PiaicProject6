importScripts("https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/7.21.0/firebase-messaging.js")

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBui420jrxuyhvZkMFA2Gjwh3VxNMxJfT0",
    authDomain: "quizapp7a.firebaseapp.com",
    databaseURL: "https://quizapp7a.firebaseio.com",
    projectId: "quizapp7a",
    storageBucket: "quizapp7a.appspot.com",
    messagingSenderId: "452229006572",
    appId: "1:452229006572:web:8a9f38f862e921f3cad1c9",
    measurementId: "G-J28H1X165L"
};
firebase.initializeApp(firebaseConfig)
firebase.messaging();