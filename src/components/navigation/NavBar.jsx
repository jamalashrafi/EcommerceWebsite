import React from 'react';
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
    return (
        <div>
            <div className="NavMain">
                <div className="logo">
                    <span>fer<em>n</em>spetals</span>
                </div>
                <BurgerMenu />
            </div>
            
        </div>
    )
}

export default NavBar
