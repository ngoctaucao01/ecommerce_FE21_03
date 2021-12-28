import React, { useState } from 'react';
import { Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const ProductsDetailNavTabs = ({ feature, info, review }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  return (
    <Col md={8}>
      <Nav tabs className="nav nav-pills mb-3">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Đặc điểm nổi bật
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Thông tin sản phẩm
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Đánh Giá
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">{feature}</TabPane>
        <TabPane tabId="2">{info}</TabPane>
        <TabPane tabId="3">{review}</TabPane>
      </TabContent>
    </Col>
  )
}

export default ProductsDetailNavTabs;
