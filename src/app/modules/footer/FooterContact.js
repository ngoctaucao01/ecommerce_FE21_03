import React from 'react';
import Form from './FooterForm';

function FooterContact() {
    return (
        <div className="col-sm-12 col-md-4">
            <h4 className="footer__title"><a href="/">Gửi email</a></h4>
            <p className="footer__text">Gửi email cho chúng tôi để được hỗ trợ</p>
            <Form />
        </div>
    )
}
export default FooterContact;
