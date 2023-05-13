import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Home  from './components/home/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
         
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
