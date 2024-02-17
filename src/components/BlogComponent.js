import React from "react";
import { Container } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const BlogComponent = () => {


  const gotoLink  = () => {
    window.open("https://play.google.com/store/apps/details?id=com.freellyapp", "_blank");
  };


  return (
    <div>
      <Container className="blogContainer" fluid>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <div className="appDetails">
                <h2>
                  Download Freelly App now & refer to get Credit Points
                </h2>
                <p>
                </p>
                <button onClick={gotoLink}><img alt="google-play" src={require('../img/googleplay-icon.png')}/> Get it on Google Play</button>
              </div>
            </Col>
            <Col xs={12} md={4} >
              <img alt="phone" src={require('../img/app-half-screen.png')} className="imgresponsive" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default BlogComponent;
