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

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonsSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    offPokemonsSoket = () => {
        this.database.ref('pokemons').off()
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }
    
    postPokemon = (key, pokemon) => {
        this.database.ref('pokemons/' + key).set(pokemon);
    }

    addPokemon = (data) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data);
    }
    
}

export default Firebase;