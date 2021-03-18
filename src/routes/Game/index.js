import z from '../../zxc.json';
import PokemonCard from "../../components/PokemonCard";
import s from './style.module.css';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

const GamePage = ({onChange}) => {
    const [pokemons, setPokemons] = useState(JSON.parse(JSON.stringify(z)));

    const changeCard = (id) => {
        const result = pokemons.map(item => {
            if (item.id === id) item["active"] = true;
            return item});
        setPokemons(result);
    };

    const cardClick = ({id}) => {
        changeCard(id)
    }

    const history = useHistory();

    const goHome = () => {
        history.push('/');
    }

    return(
            <>
                <h1>This is Game Page</h1>
                <button onClick = {goHome}>
                    Go HomePage
                </button>
                <div className={s.flex}>
                    {
                        pokemons.map((item) =>
                            <PokemonCard
                                key = {item.id}
                                name = {item.name}
                                img = {item.img}
                                id = {item.id}
                                type = {item.type}
                                values = {item.values}
                                cardClick={cardClick}
                                isActive={item.active}
                            />)
                    }
                </div>

            </>
    )
}

export default GamePage;