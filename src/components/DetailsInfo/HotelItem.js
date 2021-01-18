import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Star from '../../images/Star.png';

const HotelItem = () => {
  return (
    <Card className="p-0 m-0 shadow my-2">
      <Row className="m-3 d-flex align-items-center">
        <Col md={6} className="m-0 p-0">
          <img src="https://i.ibb.co/zQfSsW0/Apartment-Two.png" className="w-100 img-fluid" alt="" />
        </Col>
        <Col md={6} className="m-0 pr-0">
          <h4>Light bright airy stylish apt & safepeaceful stay</h4> <br />
          <div className="d-flex justify-content-between">
            <span>2 guests</span>
            <span>3 Bedrooms</span>
            <span>4 Beds</span>
            <span>5 Bats</span>
          </div>
          <p>Wif Air conditioning Kitchen</p>
          <p>Cancellation fexibility availiable</p>
          <div className="d-flex justify-content-between align-items-center ">
            <span><img src={Star} alt="" /> 4.9 (20)</span>
            <span>${12}/per-night</span>
            <span>$167 total</span>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default HotelItem;