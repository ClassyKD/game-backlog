import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Forgotpw from "./components/Login/Forgotpw";
import Landing from "./components/User/landingPage";
import Sidebar from "./components/Sidebar/sidebar";









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
          {/* <Route path="/side" element={<Sidebar/>}/> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
