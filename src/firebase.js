import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWnwxW2qXejuqt9_DI6jlMrSX1mxUl1A4",
    authDomain: "fb-clone-365a0.firebaseapp.com",
    projectId: "fb-clone-365a0",
    storageBucket: "fb-clone-365a0.appspot.com",
    messagingSenderId: "225378496471",
    appId: "1:225378496471:web:99792a39185aee2333e592",
    measurementId: "G-R4C3HNFKK1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db}
// export default db;