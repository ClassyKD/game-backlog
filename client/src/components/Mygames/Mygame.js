import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard>
      <MDBCardImage src='https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Call of Duty Modern Warfare 2 (2022)</MDBCardTitle>
        <MDBCardText>
        Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.
        </MDBCardText>
        <MDBBtn href='#'>Save</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
} 
     
export default App;  