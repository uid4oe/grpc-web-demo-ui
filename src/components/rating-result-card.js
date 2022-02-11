import React from 'react';
import { Col, Row, Statistic } from 'antd';

import { ShopOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';
import { avatars } from '../constant';

function RatingResultCard({ content }) {

    const { offer, catalog_item, user_rating, rating_after } = content;

    return offer && (
        <Row gutter={[16, 16]} align="middle" style={{ padding: "0.5em 0" }}>
            <Col xs={0} xl={8}>
                <Row>
                    <Col>
                        <img style={{ borderRadius: "6px" }} src={avatars[offer.partner.name]} width="100" height="100" />
                    </Col>
                </Row>
            </Col>
            <Col xs={24} xl={16} style={{ paddingLeft: "0" }}>
                <Row align="bottom" gutter={8} justify="space-between">
                    <Col style={{ fontSize: "1.25em" }}>
                        Service
                    </Col>
                    <Col>
                        <Statistic valueStyle={{ fontSize: "1.25em" }}
                            value={catalog_item} prefix={<ShopOutlined />}
                            style={{ padding: "0" }}>
                        </Statistic>
                    </Col>
                </Row>
                <Row align="bottom" gutter={8} justify="space-between">
                    <Col style={{ fontSize: "1.2em" }}>
                        Partner
                    </Col>
                    <Col>
                        <Statistic valueStyle={{ fontSize: "1.2em" }}
                            value={offer.partner.name} prefix={<UserOutlined />}
                            style={{ padding: "0" }}>
                        </Statistic>
                    </Col>
                </Row>
                < Row align="bottom" gutter={8} justify="space-between">
                    <Col style={{ fontSize: "1.15em" }}>
                        Your Rating
                    </Col>
                    <Col>
                        <Statistic valueStyle={{ fontSize: "1.15em" }}
                            value={user_rating.toFixed(1) + "/5.0"} prefix={<StarOutlined />}
                            style={{ padding: "0" }}>
                        </Statistic>
                    </Col>
                </Row>
                < Row align="bottom" gutter={8} justify="space-between">
                    <Col style={{ fontSize: "1.15em" }}>
                        Rating After
                    </Col>
                    <Col>
                        <Statistic valueStyle={{ fontSize: "1.15em" }}
                            value={rating_after.toFixed(1) + "/5.0"} prefix={<StarOutlined />}
                            style={{ padding: "0" }}>
                        </Statistic>
                    </Col>
                </Row>
            </Col >
        </Row >
    )
};

export default RatingResultCard;
