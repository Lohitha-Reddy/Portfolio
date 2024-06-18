import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertiCards from "./CertiCards";
import Particle from "../Particle";
import awsde from "../../Assets/Projects/aws_de.png";
import awscp from "../../Assets/Projects/aws_cp.png";
import msai from "../../Assets/Projects/ms_ai.svg";
import msds from "../../Assets/Projects/ms_ds.svg";

function Certis() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={5} className="project-card">
            <CertiCards
              imgPath={awsde}
              isBlog={false}
              title="AWS Certified Data Engineer Associate"
              />
          </Col>

          <Col md={5} className="project-card">
            <CertiCards
              imgPath={awscp}
              isBlog={false}
              title="AWS Certified Cloud Practitioner"
              />
          </Col>

          <Col md={5} className="project-card">
            <CertiCards
              imgPath={msai}
              isBlog={false}
              title="Microsoft Certified: Azure AI Fundamentals"
              />
          </Col>

          <Col md={5} className="project-card">
            <CertiCards
              imgPath={msds}
              isBlog={false}
              title="Microsoft Certified: Azure Data Scientist Associate"
              />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certis;
