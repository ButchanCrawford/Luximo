import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Fleet from "./components/fleet/Fleet";
import Why from "./components/why/Why";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Fleet />
      <Why />
      <Footer />
    </div>
  );
}

export default App;
