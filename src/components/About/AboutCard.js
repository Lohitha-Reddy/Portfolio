import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm from <span className="purple"> Edison, New Jersey.</span>
            <br />
            I've graduated with Master of Science in Computer Science from Rowan University, NJ.
            <br />
            Prior to my Master's, I have 2.5 years of experience working as a Software Engineer at Invesco, an
            asset-management firm headquartered at Atlanta, Georgia. 
            <br />
            I have experience working with Data Engineering projects, Full-stack web development, data migration 
            and automation projects.
            <br />
            <br />
            Apart from coding, I love doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading fiction
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
