import s from './style.module.css';
const Header = () => {
    return (
        <header class={s.root}>
            <div class={s.forest}></div>
            <div class={s.container}>
                <h1>This is title</h1>
                <p>This is Description!</p>
            </div>
        </header>
    )
}

export default Header;