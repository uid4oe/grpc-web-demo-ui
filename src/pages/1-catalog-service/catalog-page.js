import React, { useEffect, useState } from "react";

import { Col, Row, notification } from "antd";
import CatalogServiceCard from "./catalog-item-card";

import { GetItemsRequest } from "../../grpc/catalogpb/catalog_pb";
import { CatalogClient } from "../../grpc/catalogpb/catalog_grpc_web_pb";
import IntroCard from "../../components/intro-card";

let catalog_client = new CatalogClient("http://localhost:8000");

function CatalogService() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    catalog_client.getItems(new GetItemsRequest(), {}, (err, response) => {
      if (err) {
        notification.error({
          message: "Catalog Service",
          description: "Error at GetItems",
          duration: 2,
        });
      } else {
        setItems(response.toObject().itemList);
        notification.success({
          message: "Catalog Service",
          description: "GetItems completed",
          duration: 2,
        });
      }
    });
  }, []);

  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <IntroCard />
        <Row gutter={[24, 24]} style={{ marginTop: "1.75em" }}>
          {items?.map((i) => (
            <Col xs={24} xl={8} key={i.id}>
              <CatalogServiceCard item={i} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default CatalogService;
