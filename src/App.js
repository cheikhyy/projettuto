import './App.css';
import * as React from "react";
import { useEffect } from 'react';

import Eleve from './Components/Eleve/Eleve';




 function App() {
  return (
    <h1 className="text-center">
      Hello world!
    </h1>
    
  )

  useEffect(()=> {
    console.log('[App.js useEffect]');

  });
}

export default App;
