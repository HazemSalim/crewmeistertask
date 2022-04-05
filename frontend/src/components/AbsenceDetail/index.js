import React from "react";
import { Row, Col } from "react-bootstrap";
import moment from "moment";

import { getNumberOfDays } from "../../handlers";

const AbsenceDetail = ({
  memberDetails = {},
  type,
  startDate,
  endDate,
  memberNote,
  admitterNote,
  status,
}) => {
  const { name } = memberDetails;
  const start = moment(startDate);
  const end = moment(endDate);
  const days = getNumberOfDays(start, end);

  return (
    <Row>
      <Col xs={12} lg={12} className="mt-2">
        <Row>
          <Col xs={12} lg={6}>
            <b>Member name</b>
            {/* <br /> */}
            {name}
          </Col>
          <Col xs={12} lg={6}>
            <b>Type of absence</b>
            <br />
            {type}
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={12} className="mt-2">
        <Row>
          <Col xs={12} lg={6}>
            <b>Period</b>
            <br />
            {days} {days === 1 ? "day" : "days"}
          </Col>
          <Col xs={12} lg={6}>
            <b>Status</b>
            <br />
            {status}
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={12} className="mt-2">
        <Row>
          <Col xs={12} lg={6}>
            <b>Start Date</b>
            <br />
            {moment(startDate).format("YYYY-MM-DD")}
          </Col>
          <Col xs={12} lg={6}>
            <b>End Date</b>
            <br />
            {moment(endDate).format("YYYY-MM-DD")}
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={12} className="mt-2">
        <Row>
          <Col xs={12} lg={6}>
            <b>Member note</b>
            <br />
            {memberNote || "-"}
          </Col>
          <Col xs={12} lg={6}>
            <b>Admitter note</b>
            <br />
            {admitterNote || "-"}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AbsenceDetail;
