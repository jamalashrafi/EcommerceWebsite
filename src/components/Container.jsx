import React from 'react';
import NavBar from "./navigation/NavBar";
import BurgerMenu from "./navigation/BurgerMenu";

const Container = () => {
    return (
        <>
            <div className="navContainer">
                <BurgerMenu />
                <NavBar />
            </div>
        </>
    )
}

export default Container
