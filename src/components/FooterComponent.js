import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
const FooterComponent = () => {
  const navigate = useNavigate()
  return (
    <div>
<Container fluid className="footerBG">
      <Container>
          <Row>
            <Col md={4} xs={12}>
              <div className="footerLogo">
                  <img src={require('../img/freely-logo.png')} alt={require('../img/freely-logo.png')}/>
              </div>
              <div className="footerAboutTXT">
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  */}
              </div>
            </Col>
            <Col md={1}>
            </Col>
            <Col md={3} xs={12}>
              <div className="footerMenu">
                <ul>
                  <li className="menuHead">More</li>
                  <li><div href="/">About Us</div></li>
                  <li><div onClick={()=>navigate("/privacy")}>Privacy Policy</div></li>
                  <li><div href="/">FAQ's</div></li>
                </ul>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="footerMenu getintouch">
                <ul>
                  <li className="menuHead">Get in Touch</li>

                  <li><div><span><img src={require('../img/locationpin.png')} alt={require('../img/locationpin.png')}/></span> <p>House 87-89, Road 4, Block B, Niketan Housing Society, Dhaka.</p></div></li>
                  <li><div><span><img src={require('../img/mail.png')} alt={require('../img/mail.png')}/></span> <p>support@freelly.com</p></div></li>
                  <li><div><span><img src={require('../img/phone.png')} alt={require('../img/phone.png')}/></span> <p>+8809638114477 </p></div></li>
                </ul>
              </div>
            </Col>
          </Row>
      </Container>
   </Container>
   <Container fluid className="footerbottomBG">
    <Container>
      <Row>
        <Col md={6} xs={12}><p>Copyright 2022 @ Freelly. All rights reserved. </p></Col>
        <Col md={6} xs={12} className="footerSocialLink">
          <ul>
            <li>Follow us:</li>
            <li><img src={require('../img/facebook.png')} alt={require('../img/facebook.png')}/></li>
            <li><img src={require('../img/youtube.png')} alt={require('../img/youtube.png')}/></li>
          </ul>

        </Col>
      </Row>
    </Container>
   </Container>
    </div>


  );
};

export default FooterComponent;
