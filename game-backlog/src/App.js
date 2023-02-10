import "./App.css";
import { useTranslation } from "react-i18next";
import {
  MDBContainer,
  MDBNavbar,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBInput,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBBadge,
  MDBCol,
  MDBFooter,
  MDBRow,
  MDBCarouselItem,
  MDBCarousel,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const [pickedLanguage, setPickedLanguage] = useState("united-kingdom");

  return (
    <div className="App">
      <MDBNavbar light expand="lg" bgColor="light">
        <MDBContainer fluid>
          <form className="d-none d-md-flex input-group w-auto my-auto">
            <MDBInput label={t("search")} />
            <span className="input-group-text border-0">
              <MDBIcon icon="search" />
            </span>
          </form>

          <div className="navbar-nav ms-auto d-flex flex-row">
            <MDBDropdown>
              <MDBDropdownToggle
                style={{ cursor: "pointer" }}
                tag="a"
                className="nav-link"
              >
                <MDBIcon icon="bell" />
                <MDBBadge notification color="danger" pill>
                  1
                </MDBBadge>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Logout</MDBDropdownItem>
                <MDBDropdownItem link>Games</MDBDropdownItem>
                <MDBDropdownItem link>My Account</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBDropdown>
              <MDBDropdownToggle
                style={{ cursor: "pointer" }}
                tag="a"
                className="nav-link"
              >
                <i className={`flag flag-${pickedLanguage} mx-auto`}></i>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setPickedLanguage("united-States");
                  }}
                  link
                  href="#"
                >
              
               
                  <i className={`flag flag-${pickedLanguage}`}></i>Deutsch
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>

            <MDBDropdown>
              <MDBDropdownToggle
                style={{ cursor: "pointer" }}
                tag="a"
                className="nav-link"
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  className="rounded-circle"
                  height="22"
                  alt=""
                  loading="lazy"
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>{t("profile")}</MDBDropdownItem>
                <MDBDropdownItem link>{t("profileSettings")}</MDBDropdownItem>
                <MDBDropdownItem link>{t("profileLogout")}</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <MDBContainer>
        <MDBRow>
          <MDBCol lg="6" className="mx-auto my-5">
            <MDBCarousel showIndicators showControls fade>
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={1}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                alt="..."
              >
                <h5>{t("slide1Label")}</h5>
                <p>{t("slide1Description")}</p>
              </MDBCarouselItem>

              <MDBCarouselItem
                className="w-100 d-block"
                itemId={2}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                alt="..."
              >
                <h5>{t("slide2Label")}</h5>
                <p>{t("slide2Description")}</p>
              </MDBCarouselItem>

              <MDBCarouselItem
                className="w-100 d-block"
                itemId={3}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                alt="..."
              >
                <h5>{t("slide3Label")}</h5>
                <p>{t("slide3Description")}</p>
              </MDBCarouselItem>
            </MDBCarousel>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-5">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <section className="mx-auto d-flex align-items-center">
              <div className="bg-image">
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/053.webp"
                  className="w-100"
                  alt="Sample"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6" }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <p className="text-white mb-0">{t("maskText")}</p>
                  </div>
                </div>
              </div>
            </section>
          </MDBCol>
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBAccordion initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle={t("accordion1")}>
                {t("accordionTxt")}
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={2} headerTitle={t("accordion2")}>
                {t("accordionTxt")}
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={3} headerTitle={t("accordion3")}>
                {t("accordionTxt")}
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBFooter>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2" }}
        >
          © 2022 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default App;