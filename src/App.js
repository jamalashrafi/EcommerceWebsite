import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from "./components/About.jsx";
import Cake from "./components/cakes/Cake.jsx";
import ChocklateCake from "./components/cakes/ChocklateCake.jsx";
import Conatiner from "./components/Container"
import ContactUs from "./components/ContactUs.jsx";
import Flowers from "./components/flowers/Flowers.jsx";
import Lilly from "./components/flowers/Lilly.jsx"; 
import Roses from "./components/flowers/Roses.jsx";
import Home from "./components/Home.jsx";
import VanillaCake from "./components/cakes/VanillaCake.jsx";


const App = () => {
  return (
    <Router>
      <div>
          <Conatiner />
          <Route path="/" exact component={ Home } />
          <Route path="/about" data-testid="about-route" exact component={ AboutUs } />
          <Route path="/cake" exact component={ Cake } />
          <Route path="/cake/chocklate" exact component={ ChocklateCake } />
          <Route path="/cake/vanilla" exact component={ VanillaCake } />
          <Route path="/contact" exact component={ ContactUs } />
          <Route path="/flower" exact component={ Flowers } />
          <Route path="/flower/lilly" exact component={ Lilly } />
          <Route path="/flower/roses" exact component={ Roses } />
      </div>
    </Router>
  );
}

export default App;
