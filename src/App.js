import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className='container'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/home' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
