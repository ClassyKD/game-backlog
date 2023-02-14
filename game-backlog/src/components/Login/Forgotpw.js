import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBCardBody,
  MDBTabsLink,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';


function Forgotpw() {
  return (
    <MDBContainer fluid className='mt-5'>
      <section className=''>
        <MDBRow className='d-flex justify-content-center'>
          <MDBCol md='6'>
            <MDBCard>
              <MDBCardHeader className='p-4'>
                <h5 className='mb-0'>
                  <strong>Forgot Password</strong>
                </h5>
              </MDBCardHeader>
              <MDBCardBody className='p-4'>
                <p className='mb-4'>Enter your email address and we’ll send a link to reset your password</p>

                <form action='' className='mb-4'>
                  <MDBInput type='email' id='emailInput' className='mb-4' label='Your e-mail address' />

                  <MDBBtn type='button'>Request password</MDBBtn>
                </form>

                <div className='d-flex justify-content-between align-items-center mb-2'>
                  <u>
                    <a href='/'>Back to Log In</a>
                  </u>

                  <u>
                  <MDBTabsLink
                    href="/"
                    >Register</MDBTabsLink>
                  </u>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default Forgotpw;
