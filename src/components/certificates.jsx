import { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";

function CertificateItem({ courseName, provider, ImgURI, CertificateURL }) {
  return (
    <div className="certificates-item">
      <img src={ImgURI} className="certificates-img" alt="" />
      <h3>
        <a href={CertificateURL}>{courseName}</a>
      </h3>
      <h4>{provider}</h4>
    </div>
  );
}

function SlideShow() {
  const showIndicators = false;
  const slideInterval = 3000;
  const iconStyle = { fontSize: "2rem", color: "black" }
  const prevIconElement = (
    <FontAwesomeIcon
      icon={faAngleLeft}
      style={iconStyle}
    />
  );
  const nextIconElement = (
    <FontAwesomeIcon
      icon={faAngleRight}
      style={iconStyle}
    />
  );

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={showIndicators}
      nextLabel={null}
      prevLabel={null}
      nextIcon={nextIconElement}
      prevIcon={prevIconElement}
    >
      {/* Cert 8 */}
      <Carousel.Item interval={slideInterval}>
        <CertificateItem
          courseName="Google Cloud Platform Fundamentals: Core Infrastructure"
          provider="Coursera"
          ImgURI={require("../assets/img/certificates/Google Cloud Platform Fundamentals Core Infrastructure - Coursera.jpg")}
          CertificateURL="https://www.coursera.org/account/accomplishments/records/67463QF6C2PQ"
        />
      </Carousel.Item>

      {/* Cert 7 */}
      <Carousel.Item interval={slideInterval}>
        <CertificateItem
          courseName="The Web Developer Bootcamp"
          provider="Udemy"
          ImgURI={require("../assets/img/certificates/TheWebDeveloperBootcamp-UdemyCertificate.jpg")}
          CertificateURL="https://www.udemy.com/certificate/UC-3CT6FWK6/"
        />
      </Carousel.Item>

      {/* Cert 6 */}
      <Carousel.Item interval={slideInterval}>
        <CertificateItem
          courseName="Convolutional Neural Networks by Andrew Ng"
          provider="Coursera"
          ImgURI={require("../assets/img/certificates/Convolutional Neural Networks - Coursera.jpg")}
          CertificateURL="https://www.coursera.org/account/accomplishments/records/V7XCMFEKQZ9S"
        />
      </Carousel.Item>

      {/* Cert 5 */}
      <Carousel.Item interval={slideInterval}>
        <CertificateItem
          courseName="Sequence Models by Andrew Ng"
          provider="Coursera"
          ImgURI={require("../assets/img/certificates/Sequence Models - Coursera.jpg")}
          CertificateURL="https://www.coursera.org/account/accomplishments/records/NW2M73X2JS9H"
        />
      </Carousel.Item>

      {/* Cert 4 */}
      <Carousel.Item interval={slideInterval}>
        <CertificateItem
          courseName="React Building Progressive Web Apps"
          provider="LinkedIn Learning"
          ImgURI={require("../assets/img/certificates/CertificateOfCompletion_React Building pwas.jpg")}
          CertificateURL="https://www.linkedin.com/learning/react-building-progressive-web-apps-pwas"
        />
      </Carousel.Item>

      {/* Cert 3 */}
      <Carousel.Item interval={slideInterval}>
        <CertificateItem
          courseName="Node.js: Security"
          provider="LinkedIn Learning"
          ImgURI={require("../assets/img/certificates/CertificateOfCompletion_Node Js Security.jpg")}
          CertificateURL="https://www.linkedin.com/learning/node-js-security"
        />
      </Carousel.Item>

      {/* Cert 2 */}
      <Carousel.Item interval={slideInterval}>
        <CertificateItem
          courseName="Introduction to Deep Learning in Python"
          provider="DataCamp"
          ImgURI={require("../assets/img/certificates/deeplearning-in-python-datacamp.jpg")}
          CertificateURL="https://www.datacamp.com/statement-of-accomplishment/course/5f4a9d2bb193eb4c1a0c92c4a5cfde0c145c6313"
        />
      </Carousel.Item>

      {/* Cert 1 */}
      <Carousel.Item interval={slideInterval}>
        <CertificateItem
          courseName="Financial Trading in R"
          provider="DataCamp"
          ImgURI={require("../assets/img/certificates/Financial-trading-in-r.jpg")}
          CertificateURL="https://www.datacamp.com/statement-of-accomplishment/course/51e197ba4ae19d923574fda045aec25ccfbc2b01"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default class Certificates extends Component {
  render() {
    return (
      <section id="certificates" className="certificates section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Certificates</h2>
          </div>

          <SlideShow />
        </div>
      </section>
    );
  }
}
