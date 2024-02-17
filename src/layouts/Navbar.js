
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import SmoothScrollTo from "../Scroll";
import img from "../img/freely-logo-final.png";

const NavBar = () => {

  const navigate = useNavigate()
  const[navTop, setnavTop]=useState(false)

  function scrollHandler(){
    if (window.scrollY > 100)
    {
      setnavTop(true)

    }else{
      setnavTop(false)

    }

  }
  window.addEventListener("scroll",scrollHandler)

  return (
    <div>
      <>
        {["sm"].map((expand) => (
          <Navbar key={expand} expand={expand} className={navTop?"mb-3 navbar fixed-top navcolor navShadow":"mb-3 navbar fixed-top navcolor"}>
            <Container>
              {/* <Navbar.Brand >NavItems</Navbar.Brand> */}
              <Navbar.Brand>
                <div onClick={()=>navigate("/")}><img src={img} alt="logo" className="logoImg" /></div>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 navLink">
                    <Nav.Link style={{backgroundColor:"rgb(255, 102, 0)",color:"#fff",borderRadius:20}} className="download-btn" onClick={() =>navigate("/download")}>
                      Download App
                    </Nav.Link>
                    <Nav.Link onClick={() => SmoothScrollTo("home")}>
                      Home
                    </Nav.Link>
                    <Nav.Link onClick={() => SmoothScrollTo("about")}>
                      About Us
                    </Nav.Link>
                    <Nav.Link onClick={() => SmoothScrollTo("query")}>
                      FAQ's
                    </Nav.Link>
                    <Nav.Link onClick={() => SmoothScrollTo("blog")}>
                      Blog
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </div>
  );
};

export default NavBar;
