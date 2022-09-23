import React from 'react';

const BottomMenu = ({ link, icon }) => {
  return (
    <div>
      <li>
        <a href={link}>
          {' '}
          <span>{icon}</span>
        </a>
      </li>
    </div>
  );
};

export default BottomMenu;
