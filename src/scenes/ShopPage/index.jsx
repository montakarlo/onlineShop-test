/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styles from './styles.module.sass';
import { addToFavourite, fetchItems } from './actions/actions'
import { connect } from 'react-redux';
import { ShopItem } from '../../containers/ShopItem';
import { Filter } from '../../containers/Filter';


const ShopPage = ({ items, getData, onFavouriteClick }) => {
  const [goods, setItems] = useState();
  useEffect(() => {
    getData();
  }, [])
  useEffect(() => {
    setItems(items)
  }, [items])
  if (goods) {
    return (
      <div className={styles.page}>
        <div className={styles.pageContainer}>
          <div className={styles.goods}>
            {goods.map((good) => (
              <ShopItem
                key={good.id}
                id={good.id}
                code={good.code}
                imgUrl={good.imgUrl}
                availability={good.availability}
                title={good.title}
                features={good.params}
                inFav={good.inFav}
                onFavouriteClick={onFavouriteClick}
              />
            ))}
          </div>
          <Filter />
        </div>
      </div>
    )
  } else {
    return <div>loading...</div>
  }
}

const mapStateToProps = (state) => ({
  items: state.shopPage.items
})

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(fetchItems()),
    onFavouriteClick: (id) => dispatch(addToFavourite(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
