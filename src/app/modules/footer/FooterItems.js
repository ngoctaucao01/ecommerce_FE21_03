import React from 'react'

function FooterItems({heading,  items, path}) {
    var menuItems = items.map((item)=>{
        return <li key={item.id} className="footer__link"><a href={path}>{item.name}</a></li>
    })
    return (
            <div className="col-sm-12 col-md-2">
                <h4 className="footer__title"><a href="/">{heading}</a></h4>
                <ul className="list-unstyled">
                    {menuItems}
                </ul>
            </div>
    )
}
export default FooterItems;
