import React from 'react';
import styles from './styles.module.sass';
import { ReactComponent as Rate } from '../../images/star.svg';
import { ReactComponent as Check } from '../../images/check.svg';
import { ReactComponent as Sad } from '../../images/sad.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';
import { ReactComponent as Favourite } from '../../images/favourite.svg';
import { ReactComponent as FavouriteTrue } from '../../images/favouriteTrue.svg';
import { ReactComponent as Comparison } from '../../images/comparison.svg';
import goodCover from '../../images/image@2x.jpg';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../components/Button';

const mockedData = {
  price: '49 999',
  bonus: '490',
  rateMark: 3
};

export const ShopItem = ({ id, code, imgUrl, availability, title, features, inFav, onFavouriteClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.rate}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            if (index <= mockedData.rateMark - 1) {
              return <Rate key={uuidv4()} className={styles.star} />
            } else {
              return <Rate key={uuidv4()} className={`${styles.star} ${styles.star_grey}`} />
            }
          })}
        </div>
        <div className={styles.code}>Арт. {code}</div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.image}>
          <img src={imgUrl === 'product.jpg' ? goodCover : imgUrl} alt="item" />
        </div>
        <div className={styles.availability}>
          {!availability ? (
            <>
              <Sad className={styles.availability__icon} />
              <span className={`${styles.availability__text} ${styles.availability__text_out}`}>Нет в наличии</span>
            </>
          ) : (
            <>
              <Check className={styles.availability__icon} />
              <span className={styles.availability__text}>В наличии</span>
            </>
          )}
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.features}>
          {features.map((feature) => (
            <div className={styles.features__item} key={uuidv4()}>
              <span className={styles.name}>{feature.name}</span>
              <span className={styles.value}>{feature.value}</span>
            </div>
          ))}
        </div>
        <p className={styles.price}>{mockedData.price} руб.</p>
        <p className={styles.bonus}>+{mockedData.bonus} бонусов</p>
      </div>
      <div className={styles.card__footer}>
        <Button onClick={() => {}}>
          <div className={styles.buttonContent}>
            <Cart />
            <span>Купить</span>
          </div>
        </Button>
        <div className={styles.icons}>
          {inFav ? (
            <FavouriteTrue
              className={styles.icons__item}
              onClick={() => onFavouriteClick(id)}
            />
           ) : (
            <Favourite
              className={styles.icons__item}
              onClick={() => onFavouriteClick(id)}
            />
            )
          }
          <Comparison className={styles.icons__item} />
        </div>
      </div>
    </div>
  )
}
