import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({onClickMenuButton, isActive, bgActive = false}) => {
    const changeBurger = () => {
        onClickMenuButton && onClickMenuButton();
    }
    return (
        <nav className = {cn({
            [s.bgActive] : bgActive},
            s.root
        )}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div 
                    className={cn(s.menuButton, {[s.active] : isActive})}
                    onClick = {changeBurger}
                    >
                    <span />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;