import s from './style.module.css'
import PokemonCard from '../../../../../../components/PokemonCard'
import {useState} from 'react'
import cn from 'classnames'

const PlayerBoard = ({player, cards , onClickCard}) => {
    const [isSelected, setSelected] = useState(null);
    return (
        <div>
            {
                cards.map((item) => (
                    <div 
                        className = {cn(s.cardBoard, {
                            [s.selected]: isSelected === item.id
                        })}
                        onClick = {() => {
                            setSelected(item.id)
                            onClickCard && onClickCard({
                                player,
                                ...item
                            })
                        }}
                    >
                    <PokemonCard
                        className = {s.card}
                        key = {item.id}
                        name = {item.name}
                        img = {item.img}
                        id = {item.id}
                        type = {item.type}
                        values = {item.values}
                        minimize
                        isActive
                    />
                    </div>
                ))
            }
        </div>
    )
}

export default PlayerBoard;