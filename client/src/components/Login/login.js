import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBCardBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBTabsContent,
  MDBIcon,
  MDBCheckbox,
  MDBInput,
  MDBBtn,
  MDBNavbarLink
} from "mdb-react-ui-kit";
import { checkPassword, validateEmail } from "../../utils/helpers";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';



function Login() {
  const [fillActive, setFillActive] = useState("tab-login");

  const handleFillClick = (value, string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  const [formData, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [login, { error1, data1 }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmitSignup = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const { data } = await addUser({
        variables: { ...formData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleFormSubmitLogin = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const { data } = await login({
        variables: {email: formData.email,password:formData.password },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <MDBContainer fluid className="mt-5">
      <section className="text-center">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBTabs pills fill className="mb-3">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleFillClick("tab-login")}
                      active={fillActive === "tab-login"}
                    >
                      Login
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleFillClick("tab-register")}
                      active={fillActive === "tab-register"}
                    >
                      Register
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                  <MDBTabsPane
                    show={fillActive === "tab-login"}
                    aria-labelledby="tab-login"
                  >
                    <form>
                      <div className="text-center mb-3">
                        <p>Sign in with:</p>
                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>

                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="google" />
                        </MDBBtn>

                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="twitter" />
                        </MDBBtn>

                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="github" />
                        </MDBBtn>
                      </div>

                      <p className="text-center">or:</p>

                      <MDBInput
                        className="mb-4"
                        name="email"
                        value={formData.email}
                        type="email"
                        id="loginName"
                        label="Email or username"
                        onChange = {handleInputChange}
                      />

                      <MDBInput
                        className="mb-4"
                        name="password"
                        value={formData.password}
                        type="password"
                        id="loginPassword"
                        label="Password"
                        onChange = {handleInputChange}
                      />

                      <MDBRow className="mb-4">
                        <MDBCol
                          md="6"
                          className="d-flex justify-content-center"
                        >
                          <MDBCheckbox
                            className=" mb-3 mb-md-0"
                            defaultChecked
                            label=" Remember me"
                          />
                        </MDBCol>

                        <MDBCol
                          md="6"
                          className="d-flex justify-content-center"
                        >
                          <MDBNavbarLink href="Forgotpw">Forgot password?</MDBNavbarLink>
                        </MDBCol>
                      </MDBRow>

                      <MDBBtn type="submit" block className="mb-4"><MDBNavbarLink href="/home" className="text-white" onClick={handleFormSubmitLogin}>Sign in</MDBNavbarLink>
                     
                      </MDBBtn>

                      <div className="text-center">
                        <p>
                          Not a member? <MDBTabsLink
                      onClick={() => handleFillClick("tab-register")}
                      active={fillActive === "tab-register"}
                    >
                      Register
                    </MDBTabsLink>
                        </p>
                      </div>
                    </form>
                  </MDBTabsPane>
                  <MDBTabsPane
                    show={fillActive === "tab-register"}
                    aria-labelledby="tab-register"
                  >
                    <form>
                      <div className="text-center mb-3">
                        <p>Sign up with:</p>
                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>

                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="google" />
                        </MDBBtn>

                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="twitter" />
                        </MDBBtn>

                        <MDBBtn
                          color="link"
                          type="button"
                          floating
                          className="mx-1"
                        >
                          <MDBIcon fab icon="github" />
                        </MDBBtn>
                      </div>

                      <p className="text-center">OR</p>

                      <MDBInput
                        className="mb-4"
                        name="username"
                        value={formData.username}
                        type="email"
                        id="loginName"
                        label="Email or username"
                        onChange = {handleInputChange}
                      />

            

                      <MDBInput
                        className="mb-4"
                        name="email"
                        value={formData.email}
                        type="email"
                        id="registerEmail"
                        label="Email"
                        onChange={handleInputChange}
                      />

                      <MDBInput
                        className="mb-4"
                        name="password"
                        value={formData.password}
                        type="password"
                        id="registerPassword"
                        label="Password"
                        onChange={handleInputChange}

                      />


                      <MDBCheckbox
                        wrapperClass="d-flex justify-content-center mb-4"
                        defaultChecked
                        label="I have read and agree to the terms"
                      />

                      <MDBBtn type="submit" block className="mb-3" onClick={handleFormSubmitSignup}>
                      <MDBNavbarLink href="/home" className="text-white">Sign in</MDBNavbarLink>
                      </MDBBtn>
                    </form>
                  </MDBTabsPane>
                </MDBTabsContent>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default Login;

