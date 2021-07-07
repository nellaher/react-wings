import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAVkuDLLp28voxEqXVxJdKjpGazxk5pltU",
    authDomain: "wings-ecommerce.firebaseapp.com",
    projectId: "wings-ecommerce",
    storageBucket: "wings-ecommerce.appspot.com",
    messagingSenderId: "825180756783",
    appId: "1:825180756783:web:1ddf8946c85a905b1edfda"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();