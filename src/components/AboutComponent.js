import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const AboutComponent = () => {
  return (
      <Container className="aboutsection">
        <Row>
          <Col className="flexDisplay justify-content-center">
            <div className="aboutusTXT">
                  <h1 >What is carpool?</h1>
                  <p>
                  If you have a vehicle (car/bike) and driving alone, Freelly will help you to connect with other like-minded professionals who are traveling on the same route – same time. You can share empty seats with others by Offering Ride and share fuel costs. You can save upto 60% travel cost per month, help reduce traffic congestion and enhance your network.
                  </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5} className="aboutIMG">
          <img src={require('../img/about.png')} alt={require('../img/about.png')}/>
          </Col>
          <Col xs={12} md={7}>
            <div className="carpoolTXT">
                <h2>Why should I carpool?</h2>
                <h6>Save upto 60% on Commute Cost</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  assumenda consequatur perspiciatis aperiam alias nihil ab.
                </p>
                <h6>Expand your Professional Network</h6>
                <p>
                Networking is all about building lasting relationships, and carpooling is a great way to do that. By carpooling with the same group of professionals on a regular basis, you can build trust, establish rapport and develop long-term relationships that can benefit your career or business.
                </p>
                <h6>Reduce Traffic congestion and Save Environment</h6>
                <p>
                Carpooling helps reduce traffic congestion and overall carbon emissions by reducing the number of vehicles on the road. By sharing a ride with others, you can help reduce traffic congestion, shorten commute times, and make your city a greener and more sustainable place to live.
                </p>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default AboutComponent;
