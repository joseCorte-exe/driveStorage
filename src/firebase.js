const firebaseConfig = {
    apiKey: "AIzaSyDIKZhLeDEGSF1oEBAYZhL6QSQ4FL5whhA",
    authDomain: "drive-clone-66884.firebaseapp.com",
    projectId: "drive-clone-66884",
    storageBucket: "drive-clone-66884.appspot.com",
    messagingSenderId: "120993806826",
    appId: "1:120993806826:web:fa4f35a28d91e7dcab5a93"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
