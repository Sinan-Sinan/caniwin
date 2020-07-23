import React from 'react';
import './CSS/App.css';
import Routers from './Routers.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div>
            <ToastContainer />
            <Routers /> 

        </div>
    );
  }
  
  export default App;