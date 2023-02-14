import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Navbar />
      <MDBContainer>
        <Home />
      </MDBContainer>
      <Footer/>
    </>
  );
}
export default App;