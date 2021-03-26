import s from './style.module.css'
import {useContext, useState} from 'react'
import {PokemonContext} from '../../../../context/pokemonContext'
import PokemonCard from '../../../../components/PokemonCard'
import { FireBaseContext } from '../../../../context/firebaseContext'
import {useHistory} from 'react-router-dom';

const FinishPage = () => {
    const history = useHistory();
    const {pokemons} = useContext(PokemonContext);
    const {onSelectedPokemons} = useContext(PokemonContext)
    const {enemyPokemons} = useContext(PokemonContext);
    const [isSelected, setIsSelected] = useState(null);

    const oneCardSelected = (key, enemyPokemons) => {
        const pokemon = {...enemyPokemons[key]};
        console.log(pokemon);
    }

    if(Object.keys(pokemons).length === 0){
        history.replace('/game');
    }

    return (
        <>
            <div className = {s.flex}>
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
                        />)
                }  
            </div>
            <div className = {s.click}>
                <button>
                    End Game
                </button>
            </div>
            <div className = {s.flex}>
                 {
                    Object.entries(enemyPokemons).map(([key, item]) =>
                        <PokemonCard
                            className = {s.card}
                            key = {key}
                            name = {item.name}
                            img = {item.img}
                            id = {item.id}
                            type = {item.type}
                            values = {item.values}
                            isActive={true}
                            isSelected = {item.active}  
                            cardClick = {() => oneCardSelected(key, enemyPokemons)}
                        />)
                }  
            </div>
        </>
    )
}

export default FinishPage;