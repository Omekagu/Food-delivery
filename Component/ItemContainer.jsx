import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import Image from 'next/image';
import React, { useState } from 'react';

const ItemContainer = ({ imgSrc, name, ratings, price }) => {
  const [isFav, setFav] = useState(false);
  const [curVal, setCurVal] = useState(Math.floor(ratings));

  const handleClick = (value) => {
    setCurVal(value);
  };

  return (
    <div className="itemCard">
      <div
        className={`itemCard__isFavorite ${isFav ? 'active' : ''}`}
        onClick={() => setFav(!isFav)}
      >
        <Favorite />
      </div>
      <div className="itemCard__imgBox">
        <Image
          className="image"
          src={imgSrc}
          alt="image"
          width={'100%'}
          height={'100%'}
        />
      </div>
      <div className="itemCard__imgContent">
        <h3 className="name">{name}</h3>
        <div className="botttom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${curVal > i ? 'orange' : 'gray'}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
          </div>
          <div className="priceAdd">
            <h3 className="price">
              <span>$</span>
              {price}
            </h3>
            <i className="addToCart">
              <AddRounded />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemContainer;
