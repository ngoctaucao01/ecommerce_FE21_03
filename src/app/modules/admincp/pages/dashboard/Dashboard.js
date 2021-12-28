import React, { useEffect, useState } from 'react';
import { withFirebase } from '../../../firebase';
import { Card, Typography, Row, Col, Icon } from 'antd';
import './styles/Dashboard.scss';

const { Meta } = Card;

const DashboardPage = ({ firebase }) => {
  const [loading, setLoading] = useState(true);
  const [countUsers, setCountUsers] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const { Title } = Typography;
  const iconStyle = {
    fontSize: '60px',
    color: '#08c',
  }
  const cardStyle = {
    marginTop: 16,
  }

  useEffect(() => {
    firebase.getTotalUsers()
      .then(data => setCountUsers(data))
      .then(() => setLoading(false));
  }, [firebase]);

  useEffect(() => {
    firebase.getTotalProducts()
      .then(data => setCountProducts(data))
      .then(() => setLoading(false));
  }, [firebase]);

  return (
    <>
      <Title level={3}>Dashboard</Title>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <Card style={cardStyle} loading={loading}>
            <Meta
              avatar={
                <Icon style={iconStyle} type="team" />
              }
              title={`${countUsers} Users`}
              description="Number of Users"
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card style={cardStyle} loading={loading}>
            <Meta
              avatar={
                <Icon style={iconStyle} type="shop" theme="twoTone" twoToneColor="#eb2f96" />
              }
              title={`${countProducts} Products`}
              description="Number of Products"
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card style={cardStyle} loading={loading}>
            <Meta
              avatar={
                <Icon style={iconStyle} type="solution" />
              }
              title={`${countProducts} Pending Orders`}
              description="Number of Orders"
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default withFirebase(DashboardPage);
