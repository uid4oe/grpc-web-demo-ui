import React, { useContext } from 'react';
import { Card, Col, Row, Statistic } from 'antd';

import { DollarOutlined, ShoppingOutlined, StarOutlined } from '@ant-design/icons';
import { avatars, OfferContext } from '../constant';


function SelectedOfferCard() {

    const [selectedOffer, _] = useContext(OfferContext);

    const addDecimal = (value) => (value.toFixed(1) + "").endsWith("0") ? value.toFixed(0) : value.toFixed(1);

    return (
        <Card
            size="small"
            key={selectedOffer.id}
            bodyStyle={{ padding: "0.3em 1em 0.9em 1em" }}
        >
            <Row gutter={[16, 16]} align="middle">
                <Col span={10}>
                    <Row>
                        <Col>
                            <Statistic valueStyle={{ fontSize: "1.1em" }}
                                value={selectedOffer.partner.name}
                                style={{ padding: "0" }}>
                            </Statistic>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img style={{ borderRadius: "6px" }} src={avatars[selectedOffer.partner.name]} width="70" height="70" />
                        </Col>
                    </Row>
                </Col>
                <Col span={14} style={{ paddingLeft: "0" }}>
                    < Row align="bottom" gutter={8} justify="space-between">
                        <Col>
                            Rating
                        </Col>
                        <Col>
                            <Statistic title={<span style={{ fontSize: "1em", color: "black" }}></span>} valueStyle={{ fontSize: "1.25em" }}
                                value={addDecimal(selectedOffer.partner.rating) + "/5"} prefix={<StarOutlined />}
                                style={{ padding: "0" }}>
                            </Statistic>
                        </Col>
                    </Row>
                    <Row align="bottom" gutter={8} justify="space-between">
                        <Col>
                            Offer
                        </Col>
                        <Col>
                            <Statistic title={<span style={{ fontSize: "1em", color: "black" }}></span>} valueStyle={{ fontSize: "1.25em" }}
                                value={selectedOffer.amount} prefix={<DollarOutlined />}
                                style={{ padding: "0" }}>
                            </Statistic>
                        </Col>
                    </Row>
                    <Row align="bottom" gutter={8} justify="space-between">
                        <Col>
                            Orders
                        </Col>
                        <Col>
                            <Statistic title={<span style={{ fontSize: "1em" }}></span>} valueStyle={{ fontSize: "1.25em" }}
                                value={selectedOffer.partner.orders} prefix={<ShoppingOutlined />}
                                style={{ padding: "0" }}>
                            </Statistic>
                        </Col>
                    </Row>
                </Col>
            </Row >

        </Card >
    )
};

export default SelectedOfferCard;
