import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACeBtDOhxLQvWv2H2Pd_ltfX-acfCbSjw",
    authDomain: "todo-app-4d4b6.firebaseapp.com",
    projectId: "todo-app-4d4b6",
    storageBucket: "todo-app-4d4b6.appspot.com",
    messagingSenderId: "845858561661",
    appId: "1:845858561661:web:62dca1976d54a135dfdb14",
    measurementId: "G-PBRVCPT1N5"
  
      
})
const db = firebaseApp.firestore();

export default db