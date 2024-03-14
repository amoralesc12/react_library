"use client"
import React from 'react';
import Modal from "../componentes/BodyLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
      <div >
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Modal />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;