import s from './style.module.css';


const GamePage = ({onChange, title, descr}) => {
    
    const goHome = () => {
        onChange && onChange('app')
    }

    return(
            <div className={s.root}>
                <div className={s.forest}></div>
                <div className={s.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                    <button onClick = {goHome}>
                        Go HomePage
                    </button>
                </div>
            </div>      
    )
}

export default GamePage;