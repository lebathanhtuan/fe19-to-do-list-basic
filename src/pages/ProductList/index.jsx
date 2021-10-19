import React from 'react'
import { useHistory, generatePath } from 'react-router-dom';
import { Button } from "react-bootstrap";

import { PRODUCT_LIST } from '../../constants/product'
import { ROUTER } from '../../constants/router'

import * as S from './styles'

const ProductListPage = () => {
  const history = useHistory()

  const renderProductList = () => {
    return PRODUCT_LIST.map((item, index) => (
      <div
        key={item.id}
        className="card"
        onClick={() => history.push({
          pathname: generatePath(ROUTER.PRODUCT_DETAIL, { id: item.id }),
          search: '?sort=new',
          hash: '#demo',
          state: item
        })}
      >
        {item.isNew && <div className="new">NEW</div>}
        <img src={item.image} className="image" alt="" />
        <div className="card-content">
          <div>{item.name}</div>
          <div>{item.price.toLocaleString()}</div>
        </div>
      </div>
    ));
  };

  return (
    <>
    <S.ListTop>
      <Button
        onClick={() => {
          history.push({
            pathname: ROUTER.HOME,
            state: {
              tabActive: 'B',
            }
          })
        }}
      >
        Đi đến TabB của Home
      </Button>
    </S.ListTop>
      <div className="list">
        {renderProductList()}
      </div>
    </>
  )
}

export default ProductListPage
