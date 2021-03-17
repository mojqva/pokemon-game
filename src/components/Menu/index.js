import cn from 'classnames';

import s from './style.module.css';

const Menu = ({isActive}) => {
    return (
        <div className= {cn(s.menuContainer, {[s.active] : isActive, [s.deactive] : isActive === false})}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    <li>
                        <a href="/#">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;