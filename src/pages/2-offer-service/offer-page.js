import React, { useContext, useEffect, useState } from "react";

import { Col, Row, Typography, notification, message } from "antd";
import OfferServiceCard from "./offer-card";
import { StateContext, CatalogContext } from "../../constant";

import SelectedCatalogItemCard from "../../components/selected-catalog-item-card";

import { GetOfferStreamRequest } from "../../grpc/offerpb/offer_pb";
import { OfferClient } from "../../grpc/offerpb/offer_grpc_web_pb";

let offer_client = new OfferClient("http://localhost:8001");

function OfferService() {
  const [selectedCatalogItem, _] = useContext(CatalogContext);

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    let data = [];

    let req = new GetOfferStreamRequest();
    req.setFlowId(globalState.flow_id);
    req.setCatalogId(selectedCatalogItem.id);

    let stream = offer_client.getOfferStream(req, {});

    stream.on("data", (response) => {
      data.push(response.toObject());
      setOffers([...data]);
      message.info(`One New Offer, Total: ${data.length}`, 0.4);
    });

    stream.on("end", async () => {
      notification.success({
        message: "Offer Service",
        description: "GetOfferStream completed",
        duration: 2,
      });
    });

    stream.on("error", () =>
      notification.error({
        message: "Offer Service",
        description: "Error at GetOfferStream",
        duration: 2,
      })
    );

    return () => {
      stream.cancel();
    };
  }, []);

  const [globalState, setGlobalState] = useContext(StateContext);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={8}>
          <Typography.Title level={4}>Selected Catalog Item</Typography.Title>
          <SelectedCatalogItemCard />
        </Col>
        <Col xs={24} xl={16}>
          <Typography.Title level={4}>Live Offers</Typography.Title>
          <div style={{ margin: "1.2em" }}>
            <Row gutter={[8, 8]}>
              {offers.map((i) => (
                <Col xs={24} xl={8} key={i.id}>
                  <OfferServiceCard item={i} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default OfferService;
