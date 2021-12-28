import React from 'react';
import { Container, Row } from 'reactstrap'
import Copyright from './Copyright'
import FooterItems from './FooterItems'
import FooterContact from './FooterContact'
import Contact from './Contact'
import BoxBrand from './BoxBrand'


function Footer() {
  const footerItems = [
    {
      heading: 'Thông Tin',
      items: [
        { id: 1, name: 'Về chúng tôi' }, { id: 2, name: 'Giao Hàng' },
        { id: 3, name: 'Cảm Nghĩ' }, { id: 4, name: 'Lưu Trữ' },
        { id: 5, name: 'Chính Sách Riêng Tư' }
      ]
    },
    {
      heading: 'Mua Hàng',
      items: [
        { id: 1, name: 'Về chúng tôi' }, { id: 2, name: 'Giao Hàng' },
        { id: 3, name: 'Cảm Nghĩ' }, { id: 4, name: 'Lưu Trữ' },
        { id: 5, name: 'Chính Sách Riêng Tư' }
      ]
    }
  ]


  var items = footerItems.map((item,index) => {
    return <FooterItems key={index} heading={item.heading} items={item.items} path={item.path} />
  })
  return (
    <>
    <BoxBrand/>
    <footer className="footer">
      <Container>
        <Row>
          {items}
          <FooterContact />
          <Contact />
          <Copyright />
        </Row>
      </Container>
    </footer>
    </>
  )
}
export default Footer;
