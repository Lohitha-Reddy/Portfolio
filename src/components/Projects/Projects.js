import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import data from "../../Assets/Projects/Data_Modeling.png";
import pharma from "../../Assets/Projects/epharmacy.png";
import autism from "../../Assets/Projects/autism.png";
import dl2 from "../../Assets/Projects/dl2.png";
import ml from "../../Assets/Projects/ml.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Mood Mapper is built using TensorFlow, to develop a facial expression analysis system.
Teachable Machine is used for  training. Teachable Machine is an
online tool developed by Google that enables users to easily train machine learning models using a
simple interface. It allows users to classify
and recognize objects, sounds, and, in our case, facial expressions, by providing labeled examples to
the model."
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharma}
              isBlog={false}
              title="MedTrust"
              description="Developed an e-pharmacy web application, MedTrust, mirroring the functionalities of prominent platforms like
Amazon Pharma. Completely built on MERN stack using HTML, CSS, JavaScript, React JS, Node JS, Express JS and MongoDB,
integrating various components for robust performance."
              demoLink="https://medtrust.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Data Modeler"
              description="Successfully loaded Carvana car sales data into AWS S3. Conducted data cleansing procedures to remove null values and ensure data quality. Designed and implemented Fact and Dimension tables to organize the data effectively. Modeled the data through Medallion architecture stages (Bronze, Silver, Gold) to ensure data reliability and
performance. Created insightful and meaningful visualizations using Power BI to support data-driven decision-making.
"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Major Incident Predictor"
              description="Implemented MIP, a Machine Learning project within ServiceNow, employing diverse algorithms (Logistic
Regression, SVM, Decision Tree, XGBoost) to forecast the impact of change requests on major incidents. Achieved efficiency gains by detecting 15% of major incidents, saving 1715 business hours, supported by
insightful visualizations using Matplotlib."/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dl2}
              isBlog={false}
              title="Quilter"
              description="Developed Quilter, a Deep Learning project focused on classifying Quora questions as sincere or insincere. Engineered advanced Deep Learning and Natural Language Processing algorithms, including Recurrent
Neural Networks (RNN) and Long Short-Term Memory (LSTM)"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autism}
              isBlog={false}
              title="Autism and Bipolar Disorder Detector"
              description="Sourced and preprocessed clinical and behavioral datasets to detect Autism and Bipolar Disorder.
Cleaned data and selected key features.
Evaluated Logistic Regression, Random Forest, and SVM models.
Used accuracy, precision, recall, and F1-score for assessment. Fine-tuned model hyperparameters.
Created a Flask web app for predictions. Presented findings with Power BI."
              />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
