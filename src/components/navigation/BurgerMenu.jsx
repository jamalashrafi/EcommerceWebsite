import React, {useState} from 'react';
import SideBar from "./SideBar";

const BurgerMenu = () => {
    const [open, setopen] = useState(false);
    return (
        <div>
            <div className="Burger" onClick={()=>setopen(!open)}>
                <i className="fas fa-bars hamburger"></i>
            </div>
            {open ?
                <SideBar /> : ""
            }
        </div>
    )
}

export default BurgerMenu
