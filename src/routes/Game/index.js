import PokemonCard from "../../components/PokemonCard";


import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

import s from './style.module.css';

import database from '../../service/firebase';


const GamePage = () => {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, [pokemons]);


    const changeCard = (id, key) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};

                if (pokemon.id === id) {
                    !pokemon.active ? pokemon.active = true : pokemon.active = false
                    database.ref('pokemons/'+ key).update({active : pokemon.active});
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const history = useHistory();

    const goHome = () => {
        history.push('/');
    }

    const addPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key;
        console.log('newKey', newKey);
        
        database.ref('pokemons/' + newKey).set({
             name: 'NewPokemon',
             id: Date.now(),
             img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
             values: {
                 top: 1,
                 bottom: 1,
                 left: 1,
                 right: 1,
             },
             active: true,
             type: 'normal',
        });
    }

    return(
            <>
                <h1>This is Game Page</h1>
                <button onClick = {goHome}>
                    Go Home
                </button>
                <button onClick = {addPokemon}>
                    Add Pokemon
                </button>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key, {id, name, img, type, values, active}]) =>
                            <PokemonCard
                                key = {key}
                                name = {name}
                                img = {img}
                                id = {id}
                                type = {type}
                                values = {values}
                                cardClick={() => changeCard(id, key)}
                                isActive={active}
                            />)
                    }
                </div>

            </>
    )
}

export default GamePage;