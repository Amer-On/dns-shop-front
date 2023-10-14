import Header from "./components/common/Header";
import React from "react";
import {Outlet} from "react-router";
import Footer from "./components/common/Footer";
import video from "./static/bg.mp4";
import 'styles/app.css'


function App() {
  return (
      <>
          <video id="background-video" autoPlay loop muted>
              <source src={video} type="video/mp4"/>
          </video>
          <Header/>
          <div className='content-wrapper'>
              <Outlet/>
          </div>
          <Footer/>
      </>
  );
}

export default App;
