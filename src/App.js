import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage"
import Form from './Components/Form'

const style = { margin: '1rem', padding: '1rem', border: '2px solid black' }

export default function App() {
  return (
    <div style={style} >
      <h1>Bloomtech Eats</h1>
      <nav>
      <Link to="/">Home</Link>&nbsp;
      <Link to="pizza">Hungry for Pizza?</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pizza" element={<Form />}/>
      </Routes>
      </div>
  );
};









// export default App;