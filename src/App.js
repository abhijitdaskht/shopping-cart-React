import React, { Component } from 'react';
import Header from './Components/Header/Header';
import BodyDetails from "./Components/Body/BodyDetails";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div className="site-wrap">
        <Header></Header>
        <BodyDetails></BodyDetails>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
