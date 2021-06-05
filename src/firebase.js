const firebaseConfig = {
    apiKey: "AIzaSyAl9mkNG1Px5tXoW6fumRNtlF--I8dACEA",
    authDomain: "disneyplus-96804.firebaseapp.com",
    projectId: "disneyplus-96804",
    storageBucket: "disneyplus-96804.appspot.com",
    messagingSenderId: "79180022836",
    appId: "1:79180022836:web:e60eae4470cea1e93d7661",
    measurementId: "G-16F78KJNBB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();                  //For the database
const auth= firebase.auth();                        //For authentication
const provider = new firebase.auth.GoogleAuthProvider();    //For third-party authentication
const storage = firebase.storage();

export {db, auth, provider, storage};