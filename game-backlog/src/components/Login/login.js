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

function Login() {
  const [fillActive, setFillActive] = useState("tab-login");

  const handleFillClick = (value, string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    //  add mutation to add a user make back end in mern 26 copy on config ans user.js and thought in schema use 41 33 34 get rid of comment 
    //  use the resolvers use the auth and server.js make sure to nock out backend copy server.js 
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
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
                        name="userName"
                        value={userName}
                        type="email"
                        id="loginName"
                        label="Email or username"
                        onchange = {handleInputChange}
                      />

                      <MDBInput
                        className="mb-4"
                        name="password"
                        value={password}
                        type="password"
                        id="loginPassword"
                        label="Password"
                        onchange = {handleInputChange}
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

                      <MDBBtn type="submit" block className="mb-4">
                        Sign in
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
                        name="name"
                        value={userName}
                        type="text"
                        id="registerName"
                        label="Name"
                      />

                      <MDBInput
                        className="mb-4"
                        name="name"
                        value={userName}
                        type="text"
                        id="registerUsername"
                        label="Username"
                      />

                      <MDBInput
                        className="mb-4"
                        name="Email"
                        value={email}
                        type="email"
                        id="registerEmail"
                        label="Email"
                      />

                      <MDBInput
                        className="mb-4"
                        name="password"
                        value={password}
                        type="password"
                        id="registerPassword"
                        label="Password"
                      />

                      <MDBInput
                        className="mb-4"
                        type="password"
                        id="registerRepeatPassword"
                        label="Repeat password"
                      />

                      <MDBCheckbox
                        wrapperClass="d-flex justify-content-center mb-4"
                        defaultChecked
                        label="I have read and agree to the terms"
                      />

                      <MDBBtn type="submit" block className="mb-3">
                        Sign in
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

