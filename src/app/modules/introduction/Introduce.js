import React from 'react';
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { HeaderTitleMedium } from '../shared/header-title';

function Introduce() {
  const { t } = useTranslation();
  return (
    <section>
      <HeaderTitleMedium title={t('INTRODUCE')} />
      <Row>
        <Col md={5}><img src="../assets/images/common/introduction.jpg" alt={t('INTRODUCE')} /></Col>
        <Col md={7}>
          <h3 className="text-uppercase">Chào mừng đến với wine hourse</h3>
          <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750 ml. Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750 ml.. Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quảvớiđộrượu nhẹ, bọt ga đầy trắng mịn. Vang nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750 ml..</p>
        </Col>
      </Row>
    </section>
  )
}

export default Introduce
