import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({onClickMenuButton, isActive}) => {
    const changeBurger = () => {
        onClickMenuButton && onClickMenuButton();
    }
    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a 
                    className={cn(s.menuButton, {[s.active] : isActive})}
                    onClick = {changeBurger}
                    >
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;