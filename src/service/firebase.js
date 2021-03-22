import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBlNxzl-l_vRQQOEHPORGgo2VGlsWUL7s8",
    authDomain: "pokemon-game-cfb5c.firebaseapp.com",
    databaseURL: "https://pokemon-game-cfb5c-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-cfb5c",
    storageBucket: "pokemon-game-cfb5c.appspot.com",
    messagingSenderId: "168577416193",
    appId: "1:168577416193:web:0f67e0af43deb75b8f5400"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;