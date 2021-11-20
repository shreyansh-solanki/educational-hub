import React from 'react';
import { Col, Row } from 'rsuite';
import Card from './Card';

const RecentVideo = () => {
  return (
    <Row>
      <Col md={6} sm={12} xs={24}>
        <Card />
      </Col>
      <Col md={6} sm={12} xs={24}>
        <Card />
      </Col>
      <Col md={6} sm={12} xs={24}>
        <Card />
      </Col>
      <Col md={6} sm={12} xs={24}>
        <Card />
      </Col>
    </Row>
  );
};

export default RecentVideo;
