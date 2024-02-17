import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const QueryComponent = () => {
  return (
    <Container fluid>
      <Container>
      <Row>
        <Col>
        <div className="sectionTXT" >
           <h1>
              Why choose{" "}
              <span style={{ color: "rgb(255, 102, 0)" }}>Freelly</span> for
              carpool
            </h1>
              <p>
              Freelly is the ultimate carpooling app that connects car owners and passengers in a safe, convenient, and affordable way. Freelly is designed to make carpooling easy and hassle-free, whether you're commuting to work or planning a weekend getaway. Here are some of the benefits of using Freelly Carpool :
              </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={5} xs={12}>
         <img className="imgresponsive" alt="phone" src={require('../img/query.png')}/>
        </Col>
        <Col md={7} xs={12}>
          <div className="benefitListBG">
             <ul>
                <li>
                  <div className="listIMG"><img alt="phone" src={require('../img/realtime-tracking.png')}/></div>
                  <div className="listTXT">Real Time Tracking</div>
                </li>
                <li>
                  <div className="listIMG"><img alt="phone" src={require('../img/ride-post.png')}/></div>
                  <div className="listTXT">1 Click Ride Post</div>
                </li>
                <li>
                  <div className="listIMG"><img alt="phone" src={require('../img/safety-toolkit.png')}/></div>
                  <div className="listTXT">Safety Toolkit</div>
                </li>
                <li>
                  <div className="listIMG"><img alt="phone" src={require('../img/algorithm.png')}/></div>
                  <div className="listTXT">Better Matching Agorithm</div>
                </li>
                <li>
                  <div className="listIMG"><img alt="phone" src={require('../img/24x7support.png')}/></div>
                  <div className="listTXT">24*7 Support</div>
                </li>
                <li>
                  <div className="listIMG"><img alt="phone" src={require('../img/friendly-ui.png')}/></div>
                  <div className="listTXT">New Friendly UI</div>
                </li>
                <li>
                  <div className="listIMG"><img alt="phone" src={require('../img/verified-riders.png')}/></div>
                  <div className="listTXT">Verified Riders</div>
                </li>
              </ul>
          </div>
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default QueryComponent;
