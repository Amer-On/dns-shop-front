import Header from "./components/common/Header";
import React from "react";
import Footer from "./components/common/Footer";
import 'styles/app.css'


function App(props) {
  return (
      <>
          <Header {...props.headerProps}/>
          <div className='content-wrapper'>
              {props.children}
          </div>
          <Footer/>
      </>
  );
}

export default App;
