import Header from "./components/common/Header";
import React from "react";
import Footer from "./components/common/Footer";
import 'styles/app.css'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App(props) {
  return (
      <>
          <ToastContainer
              style={{"margin-top": "5em"}}
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />
          <Header {...props.headerProps}/>
          <div className='content-wrapper'>
              {props.children}
          </div>
          <Footer/>
      </>
  );
}

export default App;
