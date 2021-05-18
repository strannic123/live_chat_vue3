import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "убрал данные - смотрите в web рабочую версию",
    authDomain: "live-chat-80922.firebaseapp.com",
    projectId: "live-chat-80922",
    storageBucket: "live-chat-80922.appspot.com",
    messagingSenderId: "убрал данные - смотрите в web рабочую версию",
    appId: "убрал данные - смотрите в web рабочую версию"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth, projectFirestore, timestamp}
