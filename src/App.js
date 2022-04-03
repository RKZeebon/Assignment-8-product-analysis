
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navigation/Navbar';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>




        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
