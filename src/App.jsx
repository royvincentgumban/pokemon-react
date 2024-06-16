import {Routes, Route} from "react-router-dom";
import './App.css';
import Pokedex from "./Components/Pages/Pokedex";




function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={< Pokedex />}> </Route>
    </Routes>
    </div>

  );
}

export default App;
