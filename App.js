import React from 'react';
import Products from "./Component/Products"

import './App.css';

function App() {
  return (
    <div className="App" style={{display:"inline"}}>
        <h1 style={{border:"1px solid green",marginRight:"30%",marginLeft:"30%"}}>liste des acteurs preferer</h1>
                      <br/>
     <Products/>
     
    </div>
  );
}

export default App;
