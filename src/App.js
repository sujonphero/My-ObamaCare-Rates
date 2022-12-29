import React from "react";
import About from "./component/About";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Survey from "./component/Survey";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      {/* <Survey/> */}
      <About/>
      <Footer/>
    </>
  );
}

export default App;
