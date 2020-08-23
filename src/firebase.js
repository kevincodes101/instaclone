import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCdoDli_5uX1FYkhNw5YWErc7QeuSsBaIw",
    authDomain: "insta-clone-df5cc.firebaseapp.com",
    databaseURL: "https://insta-clone-df5cc.firebaseio.com",
    projectId: "insta-clone-df5cc",
    storageBucket: "insta-clone-df5cc.appspot.com",
    messagingSenderId: "1083832015484",
    appId: "1:1083832015484:web:cc3fd456be770ba3e107f9",
    measurementId: "G-CLSBVDSENB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;