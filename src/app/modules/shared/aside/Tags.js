import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderTitleMedium } from '../header-title';

const AsideTags = ({ tags }) => {
  const renderTags = tags.map(tag => {
    let { path, name, id } = tag;
    return <Link className="aside-tag__link" to={path} key={id}>{name}</Link>
  });

  return (
    <section>
      <HeaderTitleMedium title="Tag sản phẩm" path="/" />
      <div className="aside-tag">
        {renderTags}
      </div>
    </section>
  )
}

export default AsideTags;
