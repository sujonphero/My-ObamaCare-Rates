import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./component/About";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Hero from "./component/Hero";
import Survey from "./component/Survey";
import Privacy from "./route/Privacy";
import Terms from "./route/Terms";
import UpdatePolicy from "./route/UpdatePolicy";
import Page from "./page/Page";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        {/*  */}
        {/* <About/> */}
        <Route path="/" element={<Page/>}/>
        <Route path='/updatePolicy' element={<UpdatePolicy/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
