import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAUr1C7y-VMMLlfGeOvATNk-EWwCxfMoao",
authDomain: "geopicslive.firebaseapp.com",
projectId: "geopicslive",
storageBucket: "geopicslive.appspot.com",
messagingSenderId: "1000797976567",
appId: "1:1000797976567:web:4caa4fc414ed40098660f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };