import s from './style.module.css'
import {useContext} from 'react'
import {PokemonContext} from '../../../../context/pokemonContext'
import PokemonCard from '../../../../components/PokemonCard'
import { FireBaseContext } from '../../../../context/firebaseContext'

const FinishPage = () => {
    const firebase = useContext(FireBaseContext);
    const {pokemons} = useContext(PokemonContext);
    const {enemyPokemons} = useContext(PokemonContext);

    
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
                            cardClick = {() => {console.log(item)}}
                        />)
                }  
            </div>
        </>
    )
}

export default FinishPage;