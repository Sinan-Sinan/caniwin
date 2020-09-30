import React from 'react';
import './CSS/App.css';
import Routers from './Routers.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.js';
function App() {
    return (
        <div>
            <ToastContainer />
            <Header />
            <Routers /> 
        </div>
    );
  }
  
  export default App;