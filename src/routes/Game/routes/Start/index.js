import PokemonCard from "../../../../components/PokemonCard";


import {useHistory} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';

import s from './style.module.css';

import { FireBaseContext } from "../../../../context/firebaseContext";
import {PokemonContext} from '../../../../context/pokemonContext';


const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const [pokemons, setPokemons] = useState({});

    const pokemonsContext = useContext(PokemonContext);

    useEffect(() => {
      firebase.getPokemonsSoket((pokemons) => {
        setPokemons(pokemons);
      });   
      
      return () => firebase.offPokemonsSoket();
    }, []);

    const history = useHistory();

    const startGame = () => {
        history.push('/game/board');
    }

    
    const changeCard = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonsContext.onSelectedPokemons(key, pokemon);
        setPokemons(prevState => ({...prevState, [key] : {...prevState[key], active: !prevState[key].active}}))
    };

    return(
            <>
                <div className = {s.title}>
                    <h1>This is Game Page</h1>
                    <button onClick = {startGame}>
                        Start Game
                    </button>
                </div>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key, {id, name, img, type, values, active}]) =>
                            <PokemonCard
                                className = {s.card}
                                key = {key}
                                name = {name}
                                img = {img}
                                id = {id}
                                type = {type}
                                values = {values}
                                isActive={true}
                                isSelected = {active}
                                cardClick= {() => {
                                    if(Object.keys(pokemonsContext.pokemons).length < 5 || active) {
                                        changeCard(key)
                                    }
                                }}
                                
                            />)
                    }
                </div>

            </>
    )
}

export default StartPage;