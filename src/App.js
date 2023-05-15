import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Basket from './pages/Basket/Basket';
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/basket' element={<Basket/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
