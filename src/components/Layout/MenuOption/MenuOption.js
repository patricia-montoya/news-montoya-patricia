import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOptionContainer } from './MenuOption.style';

const MenuOption = ({ optionLink, optionName, optionIcon }) => {
  return (
    <MenuOptionContainer>
      <NavLink
        exact
        to={optionLink}
        className="navigationLink"
        style={{ width: '100%' }}
      >
        {optionIcon}
        {optionName}
      </NavLink>
    </MenuOptionContainer>
  );
};

export default MenuOption;
