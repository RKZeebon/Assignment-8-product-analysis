
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navigation/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
