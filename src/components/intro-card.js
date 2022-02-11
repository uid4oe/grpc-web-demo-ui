import React from "react";

import { Col, Row, Typography } from "antd";

function IntroCard() {
  return (
    <>
      <Row align="middle" justify="start" gutter={[4, 4]}>
        <Col>
          <Typography.Title style={{ fontSize: "1.4em" }}>
            gRPC-Web Demo
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Typography.Text>
          Pick an
          <b style={{ margin: "0 4px" }}>
            <i>impossible</i>
          </b>
          catalog item to begin
        </Typography.Text>
      </Row>
      <Row>
        <Typography.Text>
          Do you want to work in an amazing company?
        </Typography.Text>
      </Row>
      <Row>
        <Typography.Text>
          We got you! Visit us at
          <Typography.Link
            href={"https://career.alvalabs.io/jobs"}
            target="_blank"
            style={{ margin: "0 4px" }}
          >
            Alva Labs | Careers
          </Typography.Link>
        </Typography.Text>
      </Row>
    </>
  );
}

export default IntroCard;
