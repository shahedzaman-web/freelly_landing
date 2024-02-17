import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Featureimg from "../img/app-features-app.png";


const AppFeatures = () => {
  const[featuresBox, floatButton]=useState(false)
  function scrollFeatures(){
    if(window.scrollY > 880)
    {
      floatButton(true)
    }
    else{
      floatButton(false)
    }
  }

  window.addEventListener("scroll", scrollFeatures)

  return (
    <Container
      fluid
      className="greybackground"
    >
      <Container>
        <Row>
          <Col>
            <div className="sectionTXT" >
              <h1>App Features</h1>
              <p>
              Freelly is easy to use and offers many features to make carpooling easy and convenient. Here are some of the features that Freelly offers:
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className={featuresBox?"positionRelative bounceBottom":"positionRelative"}>
            <div className="floatRow bounceanimation">
              <Button className="floatButton">1-Click Ride Post</Button>
            </div>
            <div className="floatRow bounceanimation">
              <Button className="floatButton">Find Carpool or Bikepool Matches</Button>
            </div>
            <div className="floatRow bounceanimation">
              <Button className="floatButton">Live Tracking & Chat</Button>
            </div>
          </Col>
          <Col md={6}>
            <div className={featuresBox?"positionRelativeRight bounceBottom":"positionRelativeRight"}>
                <div className="floatRow bounceanimation">
                  <Button className="floatButton">Safe & Secure</Button>
                </div>
                <div className="floatRow bounceanimation">
                  <Button className="floatButton">Repeat Rides</Button>
                </div>
                <div className="floatRow bounceanimation">
                  <Button className="floatButton">Great Support</Button>
                  </div>
            </div>

          </Col>
        </Row>
        <Row>
          <Col className="mobilefloat flexDisplay justify-content-center">
              <img
                src={Featureimg}
                alt="drgrd"
                variant="top"
              />
          </Col>
        </Row>
      </Container>


    </Container>
  );
};

export default AppFeatures;
