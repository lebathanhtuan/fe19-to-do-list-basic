import React from "react";
import { Redirect } from 'react-router-dom'

import { PRODUCT_LIST } from "../../constants/product";
import { ROUTER } from '../../constants/router'

const ProductDetailPage = ({ match, ...props }) => {
  const id = match.params?.id;
  const productData = PRODUCT_LIST.find((item) => item.id === parseInt(id));

  if (!productData) return <Redirect to={ROUTER.NOT_FOUND} />

  return (
    <div>
      Product Detail Page
      <div>{productData?.name}</div>
      <div>{productData?.price?.toLocaleString()}</div>
    </div>
  );
};

export default ProductDetailPage;
