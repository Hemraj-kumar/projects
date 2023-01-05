import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyC4wbiiNcMIh-5K3MY4kq9krFQvwwNE3So",
    authDomain: "facebook-clone-bca11.firebaseapp.com",
    databaseURL:"https://facebook-clone-bca11.firebaseio.com/",
    projectId: "facebook-clone-bca11",
    storageBucket: "facebook-clone-bca11.appspot.com",
    messagingSenderId: "458294344422",
    appId: "1:458294344422:web:c90d5ddbc0e81ca6f31927",
    measurementId: "G-6SLPNF3BZ7"
});
const db=firebaseApp.firestore();
export default db