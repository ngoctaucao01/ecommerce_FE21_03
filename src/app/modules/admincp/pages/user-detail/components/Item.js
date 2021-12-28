import React, { useState } from 'react';
import { Input, Row, Col, Form, Tabs } from 'antd';
import './Item.scss';
const TabPane = Tabs.TabPane;

const UsersDetailItem = ({ user }) => {

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <Tabs type="card">
      <TabPane tab="User Profile" key="1">
        <p>UID: {user.uid}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>User Groups: {user.isAdmin ? 'Admin' : 'Member'}</p>
      </TabPane>
      <TabPane tab="Edit User Profile" key="2">
        <Form layout="inline" onSubmit={onSubmit}>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="UID">
                <Input value={user.uid} disabled />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="First Name">
                <Input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder={user.firstName} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Last Name">
                <Input value={lastName} onChange={e => setLastName(e.target.value)} placeholder={user.lastName} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Email">
                <Input value={email} onChange={e => setEmail(e.target.value)} placeholder={user.email} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </TabPane>
      <TabPane tab="Group Membership" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  )
}

export default UsersDetailItem;
