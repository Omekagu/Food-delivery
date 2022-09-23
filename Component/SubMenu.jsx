import { ChevronRight } from '@mui/icons-material';
import React from 'react';

const SubMenu = ({ name }) => {
  return (
    <div className="submenuContainer">
      <h3>{name}</h3>
      <div className="viewAll">
        <p>View All</p>
        <i>
          <ChevronRight />
        </i>
      </div>
    </div>
  );
};

export default SubMenu;
