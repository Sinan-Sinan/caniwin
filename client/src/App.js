import React from 'react';
//import './App.css';
import Header from './components/Header.js';
import Routers from './Routers.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// <Header />

function App() {
    return (
        <div>
            <ToastContainer />
            <Routers /> 
        </div>
      
    );
  }
  
  export default App;