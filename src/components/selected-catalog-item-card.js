import React, { useContext } from "react";
import { Card, Col, Divider, Row, Statistic } from "antd";

import { DollarCircleOutlined, ShoppingOutlined } from "@ant-design/icons";
import { CatalogContext } from "../constant";

function SelectedCatalogItemCard() {
  const [selectedService, _] = useContext(CatalogContext);

  return (
    <Card
      bodyStyle={{ padding: "1em" }}
      key={selectedService.id}
      title={selectedService.name}
    >
      <p>{selectedService.details}</p>
      <Divider style={{ margin: "0.5em 0" }} />

      <Row justify="space-around">
        <Col style={{ padding: "0" }}>
          <Row align="middle" gutter={8} justify="space-between">
            <Col>Total Orders</Col>
            <Col>
              <Statistic
                valueStyle={{ fontSize: "1.25em" }}
                value={selectedService.totalOrders}
                prefix={<ShoppingOutlined />}
              ></Statistic>
            </Col>
          </Row>
        </Col>
        <Col style={{ padding: "0" }}>
          <Row align="middle" gutter={8} justify="space-between">
            <Col>Average Cost</Col>
            <Col>
              <Statistic
                valueStyle={{ fontSize: "1.25em" }}
                value={selectedService.averageCost}
                prefix={<DollarCircleOutlined />}
                style={{ padding: "0" }}
              ></Statistic>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default SelectedCatalogItemCard;
