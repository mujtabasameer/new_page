import React from "react";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import Newsletter from "./Components/Newsletter";
import Cards from "./Components/Cards";

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Analytics/>
       <Newsletter/>
       <Cards/>
    </div>
  );
}

export default App;
