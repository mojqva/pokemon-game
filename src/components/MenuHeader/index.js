import Menu from '../Menu';
import NavBar from '../NavBar';

import {useState} from 'react';

const MenuHeader = () => {
    const [isActive, setActive] = useState(null);
    
    const handleClickMenuButton = () => {
        if(isActive === null) {
            setActive(true);
        } else {
            setActive(prev => !prev);
        }
        
        
    }
    return(
        <>
            <Menu
                isActive = {isActive}
            />
            <NavBar
                isActive = {isActive} 
                onClickMenuButton = {handleClickMenuButton}
            />
        </>
        
    )
}

export default MenuHeader;