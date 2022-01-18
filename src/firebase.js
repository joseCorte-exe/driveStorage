import firebase from 'firebase'

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDIKZhLeDEGSF1oEBAYZhL6QSQ4FL5whhA",
    authDomain: "drive-clone-66884.firebaseapp.com",
    projectId: "drive-clone-66884",
    storageBucket: "drive-clone-66884.appspot.com",
    messagingSenderId: "120993806826",
    appId: "1:120993806826:web:fa4f35a28d91e7dcab5a93"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const storage = firebase.storage()
const db = firebaseApp.firestore()

export {auth, provider, storage, db};
