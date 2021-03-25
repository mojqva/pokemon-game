import {useRouteMatch, Switch, Route} from 'react-router-dom'
import {useState} from 'react';

import StartPage from './routes/Start'
import BoardPage from './routes/Board'
import FinishPage from './routes/Finish'

import {PokemonContext} from '../../context/pokemonContext';

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    
    const match = useRouteMatch();

    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if(prevState[key]){
                const copyPokemon = {...prevState};
                delete copyPokemon[key];

                return copyPokemon
            }
            return {
                ...prevState,
                [key]: pokemon
            }
            
        })
    }
    const [enemyCards, setEnemyCards] = useState({})
    const handlerSetEnemy = (obj) => {
        setEnemyCards(() => {
            return obj
        })
    }
    return (
        <PokemonContext.Provider value = {{
            pokemons: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons,
            enemyPokemons: enemyCards,
            onSetEnemy: handlerSetEnemy
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;