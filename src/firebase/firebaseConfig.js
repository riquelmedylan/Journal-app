import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmt5EBg6Mg3n9n6gD5L00e7b00-YEBfTc",
    authDomain: "journal-e6db0.firebaseapp.com",
    projectId: "journal-e6db0",
    storageBucket: "journal-e6db0.appspot.com",
    messagingSenderId: "862258194224",
    appId: "1:862258194224:web:8cfcbbc9e7da7181390af5",
    measurementId: "G-CCHHD6XS2N"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}

