import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Redirect, Switch, BrowserRouter, Routes, Route, Router} from "react-router-dom";


import HfcMain from './components/HfcMain'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import AddARace from './pages/AddARace'
import Logout from './pages/Logout'

import useToken from 'hooks/useToken';

function App() {
    const { token, setToken } = useToken();

    function AddARaceReDirect() {
      console.log(token)
      if(!token) {
        return <Login setToken={setToken} />
      } else {
        return <AddARace token={token} />
      }
    } 

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HfcMain />}>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login setToken={setToken} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="addarace" element={<AddARaceReDirect />} />
            <Route path="logout" element={<Logout setToken={setToken}/> } />
          </Route >
      </Routes>
    </BrowserRouter>
  );
}

export default App;
