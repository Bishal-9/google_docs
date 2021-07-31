import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBnoRSBWe5nPGFlHTSm99zY4JZxTSLL0CQ",
    authDomain: "docs-faf96.firebaseapp.com",
    projectId: "docs-faf96",
    storageBucket: "docs-faf96.appspot.com",
    messagingSenderId: "128207247565",
    appId: "1:128207247565:web:120566f3b1a88656eb7184"
}

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app()

const db = app.firestore()

export { db }