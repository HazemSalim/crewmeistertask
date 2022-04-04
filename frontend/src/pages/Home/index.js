import React from "react";
import { Row, Col } from "react-bootstrap";
import Heading from "../../components/styled/Heading";
import Absences from "../../components/Absences";

const Home = () => {
  return (
    <Row>
      <Col lg={12} xs={12}>
        <Heading className="mt-2 mb-2" textCenter>
          Absences
        </Heading>
        <Absences />
      </Col>
    </Row>
  );
};

export default Home;
