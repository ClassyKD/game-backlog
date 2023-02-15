import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
 import "../Navbar/Navbar.css"


 function Navbar() {
  const [GameLog, setShowNav] = useState(false);
 

  return (
    <MDBNavbar expand='lg' className='head'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className='text'>GameLog</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!GameLog)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>


        
        <MDBCollapse navbar show={GameLog}>
          <MDBNavbarNav className='left'>
            <MDBNavbarItem >
              <MDBNavbarLink href='/Home' className="text">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/mygames' className="text">My Games</MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <MDBNavbarLink href='/' className="text">Log Out</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            </MDBNavbarItem>
          </MDBNavbarNav>

          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;