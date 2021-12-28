import React, { useState, useEffect } from 'react';
import getAPI from '../../../utils/services/getAPI';
import isEmpty from '../../../utils/validation/isEmpty';
import AsideCategory from './category/Category';
import AsideCompare from '../../shared/aside/Compare';
import AsideTags from '../../shared/aside/Tags'
import Advertisement from '../../shared/aside/Advertisement';

const ProductsAside = () => {
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(
    () => {
      getAPI.getProductsTags().then(res => {
        if (isEmpty(res.data)) {
          setTags(res.data);
        }
      });
    },
    []
  );

  useEffect(
    () => {
      getAPI.getProductsCategory().then(res => {
        if (isEmpty(res.data)) {
          setCategory(res.data);
        }
      });
    },
    []
  );

  return (
    <div className="aside product-list__left">
      <AsideCategory category={category} />
      <AsideCompare />
      <AsideTags tags={tags} />
      <Advertisement image="../assets/images/common/adv.jpg" title="Advertisement" to="/" />
    </div>
  );
}

export default ProductsAside;
