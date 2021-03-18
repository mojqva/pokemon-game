import z from '../../zxc.json';
import PokemonCard from "../../components/PokemonCard";
import s from './style.module.css';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

const GamePage = ({onChange}) => {
    const [pokemons, setPokemons] = useState(z);

    const [isActive, setActive] = useState(false);
    const cardClick = () => {
        setActive(!isActive);
        const newArr = z.map(function (current) {
            const card = Object.assign({}, current);
            card.active = true;
            return card;
        })
        setPokemons(newArr);
        console.log(newArr);
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
                        z.map((item) =>
                            <PokemonCard
                                key = {item.id}
                                name = {item.name}
                                img = {item.img}
                                id = {item.id}
                                type = {item.type}
                                values = {item.values}
                                cardClick={cardClick}
                                isActive={isActive}
                            />)
                    }
                </div>

            </>
    )
}

export default GamePage;