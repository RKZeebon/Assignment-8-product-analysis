
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navigation/Navbar';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
      </Routes>
    </div>
  );
}

export default App;
