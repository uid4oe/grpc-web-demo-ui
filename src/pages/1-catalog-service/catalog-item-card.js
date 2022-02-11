import React, { useContext } from "react";
import { Card, Col, Divider, Row, Statistic } from "antd";

import { DollarCircleOutlined, ShoppingOutlined } from "@ant-design/icons";
import { CatalogContext } from "../../constant";

function CatalogServiceCard({ item }) {
  const [selectedCatalogItem, setSelectedCatalogItem] =
    useContext(CatalogContext);

  const isCardSelected = selectedCatalogItem?.id == item.id;

  const selectedCardStyle = (style) => (isCardSelected ? style : {});

  const isAvailable = item?.availability === "online";

  return (
    <Card
      className={!isAvailable && "disabled"}
      key={item.id}
      style={selectedCardStyle({ borderColor: "black", borderWidth: "1.75px" })}
      hoverable={isAvailable}
      onClick={isAvailable ? () => setSelectedCatalogItem(item) : null}
      bodyStyle={{ padding: "1em" }}
      title={
        <Row gutter={16} justify="space-between">
          <Col style={{ color: !isAvailable && "rgba(0, 0, 0, 0.4)" }}>
            {item.name}
          </Col>
          <Col>
            <Card
              bodyStyle={{ padding: "0.6em" }}
              style={{
                background: isAvailable ? "#00cc00" : "#cc0000",
                borderColor: "white",
              }}
            />
          </Col>
        </Row>
      }
    >
      <p>{item.details}</p>
      <Divider style={{ margin: "0.5em" }} />
      <Row justify="space-around">
        <Col style={{ padding: "0", cursor: isAvailable ? null : "default" }}>
          <Row align="middle" gutter={8} justify="space-between">
            <Col>Total Orders</Col>
            <Col>
              <Statistic
                valueStyle={{
                  fontSize: "1.25em",
                  color: isAvailable ? null : "#00000040",
                }}
                value={item.totalOrders}
                prefix={<ShoppingOutlined />}
              ></Statistic>
            </Col>
          </Row>
        </Col>
        <Col style={{ padding: "0", cursor: isAvailable ? null : "default" }}>
          <Row align="middle" gutter={8} justify="space-between">
            <Col>Average Cost</Col>
            <Col>
              <Statistic
                valueStyle={{
                  fontSize: "1.25em",
                  color: isAvailable ? null : "#00000040",
                }}
                value={item.averageCost}
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

export default CatalogServiceCard;
