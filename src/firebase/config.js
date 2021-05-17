import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDm6z8bTWZ6MSsmTSNW7FIIcdZTR5GEG5Y",
    authDomain: "live-chat-80922.firebaseapp.com",
    projectId: "live-chat-80922",
    storageBucket: "live-chat-80922.appspot.com",
    messagingSenderId: "366223542077",
    appId: "1:366223542077:web:4c63dd96b25cc39ee22754"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth, projectFirestore, timestamp}
