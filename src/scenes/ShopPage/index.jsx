import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.sass';
import { addToFavourite, fetchFiltered, fetchItems } from './actions/actions';
import { ShopItem } from '../../containers/ShopItem';
import { Filter } from '../../containers/Filter';

const ShopPage = ({ items, getData, onFavouriteClick, filter, loading }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  const goods = useMemo(
    () =>
      items.map((good) => (
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
      )),
    [items, onFavouriteClick],
  );

  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        {!loading ? (
          items ? (
            <div className={styles.goods}>{goods}</div>
          ) : (
            <div className={styles.loading}>No data</div>
          )
        ) : (
          <div className={styles.loading}>Loading...</div>
        )}
        <Filter onFilter={filter} fetchAllData={getData} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.shopPage.items,
  loading: state.shopPage.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(fetchItems()),
    onFavouriteClick: (id) => dispatch(addToFavourite(id)),
    filter: (filters) => dispatch(fetchFiltered(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
