import Menu from '../Menu';
import NavBar from '../NavBar';

import {useState} from 'react';

const MenuHeader = ({bgActive}) => {
    const [isActive, setActive] = useState(null);
    
    const handleClickMenuButton = () => {
        setActive(prev => !prev);
    }
    return(
        <>
            <Menu
                isActive = {isActive}
            />
            <NavBar
                isActive = {isActive} 
                onClickMenuButton = {handleClickMenuButton}
                bgActive = {bgActive}
            />
        </>
        
    )
}

export default MenuHeader;