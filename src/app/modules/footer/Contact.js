import React from 'react'

function FooterContact() {
    return (
        <div className="col-sm-12 col-md-4">
            <h4 className="footer__title"><a href="/">Liên hệ</a></h4>
            <p className="footer__text">Tầng 4, Tòa nhà Hanoi Group  Số 442 Đội Cấn, P. Cống Vị, Q. Ba Đình, Hà Nội</p>
            <p className="footer__text"><i className="fas fa-fax">&nbsp; (04) 6674 2332 - &nbsp;</i><i className="fas fa-fax">&nbsp; (04) 3786 8904</i></p>
            <p className="footer__text"><i className="fas fa-fax">&nbsp; (08) 6680 9686 &nbsp;</i><i className="fas fa-envelope">&nbsp;</i><a className="footer__mail" href="emailto:support@bizweb.vn">Support@bizweb.vn</a></p>
        </div>
    )
}
export default FooterContact
