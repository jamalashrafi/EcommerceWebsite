import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <ul data-testid="navMain">
                <li><Link to="/"  data-testid="home-link">Home</Link></li>
                <li><Link to="/about" data-testid="about-link">About Us</Link></li>
                <li><Link to="cake">Cake</Link>                         
                        <span className="nestedRoutes"><Link to="/cake/chocklate">Chocolate Cakes</Link></span>
                        <span className="nestedRoutes"><Link to="/cake/vanilla">Vanilla Cakes</Link></span>
                </li>
                <li><Link to="/flower">Flowers</Link>                         
                        <span className="nestedRoutes"><Link to="/flower/roses">Roses</Link></span>
                        <span className="nestedRoutes"><Link to="/flower/lilly">Lilies</Link></span>
                </li>
                <li><Link to="/contact" data-testid="contact-link">Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default SideBar
