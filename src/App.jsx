import {Routes, Route} from "react-router-dom";
import './App.css';
import Pokedex from "./Components/Pages/Pokedex";
import Home from "./Components/Pages/Home";



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={< Home />}> </Route>
      <Route path="/Pokedex" element={< Pokedex />}> </Route>
    </Routes>
    </div>

  );
}

export default App;
