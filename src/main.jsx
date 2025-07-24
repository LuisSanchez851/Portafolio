import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Home from './pages/Home.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Portafolio from './pages/Portafolio.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost1 from './pages/BlogPost1.jsx';
import BaseDatosCompleta from './pages/BaseDatosCompleta.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />  {/* Página principal */}
        <Route path='/home' element={<Home />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blog/post-1" element={<BlogPost1 />} />
        <Route path='/basedatoscompleta' element={<BaseDatosCompleta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
