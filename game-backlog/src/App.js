import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
<<<<<<< HEAD
import Landing from "./components/User/landingPage";


import Header from "./components/Header";
import Logout from '.././utils/logout'

import Profile from "./components/User/profile"
import Sidebar from "./components/Sidebar/sidebar";

import Landing from "./components/User/landingPage";
import { Routes, Route } from "react-router-dom";

// page components
import Games from "./components/User/game";
import Pc from "./components/User/pc"
import Playstation from "./components/User/playstation"
import Xbox from "./components/User/xbox"
import Switch from "./components/User/switch"
import Users from "./components/User/User"


import Search from "./components/User/search";
import GameDetail from './components/User/gameInfo'

import Protect from './components/Protect';


import { isAuthenticated } from './utils/auth';
import AuthForm from './components/User/authForm';
import { useState, useEffect } from 'react';

// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user_data = isAuthenticated();
    if (user_data) setUser(user_data);
  }, []);
  return (
=======
import Forgotpw from "./components/Login/Forgotpw";
import Landing from "./components/User/landingPage";
import Sidebar from "./components/Sidebar/sidebar";








>>>>>>> profile

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/forgotpw" element={<Forgotpw/>}/>
          <Route path="/mygames" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/side" element={<Sidebar/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
