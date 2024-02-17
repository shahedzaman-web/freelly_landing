import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';




const HomeComponent = () => {



  const gotoLink  = () => {
    window.open("https://play.google.com/store/apps/details?id=com.freellyapp", "_blank");
  };



  return (
      <div>
      <Container fluid className="bannerroad positionRelative">
        <Container>
          <Row>
           <Col xl={6} lg={5} md={5} xs={12} className="banner justify-content-center">
              <h1>Office Commute Made Easier</h1>
              <p>Make your office commute stress-free. Transform your daily commute into a sustainable and cost-effective experience. Start carpooling with other professionals in your area and expand your network!</p>
              <button className="downloadApp-banner" onClick={gotoLink}></button>
            </Col>
            <Col xl={6} lg={7} md={7} xs={12} className="positionRelative">
              <div className="roadImgCont">
              <img src={require('../img/caronroad.png')} alt={require('../img/caronroad.png')}/>
              </div>

            </Col>
          </Row>
        </Container>
        <div className="roadimgbox">
        <img src={require('../img/road.png')} alt={require('../img/road.png')}/>
        </div>

      </Container>
      </div>
  );
};

export default HomeComponent;
