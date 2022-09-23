import { ChevronRightRounded } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

const rowCard = ({ imageSrc, name, isActive }) => {
  return (
    <>
      <div className={`rowCard ${isActive ? 'active' : ''}`}>
        <div className="rowCard__imageBox">
          <Image src={imageSrc} alt={'items'} width={'100%'} height="100%" />
        </div>
        <h3>{name}</h3>
        <i className="rowCard__icon">
          <ChevronRightRounded />
        </i>
      </div>
    </>
  );
};

export default rowCard;
