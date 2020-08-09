import React from 'react';
import { SidebarContainer, HeaderContainer } from './Sidebar.style';
import { Megaphone } from '@styled-icons/entypo/Megaphone';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <HeaderContainer>
        <Megaphone className="iconStyle" />
        <h2 className="headerText">News Room</h2>
      </HeaderContainer>
      <h4>Something</h4>
      <h4>Something</h4>
      <h4>Something</h4>
      <h4>Something</h4>
      <h4>Something</h4>
      <h4>Something</h4>
    </SidebarContainer>
  );
};

export default Sidebar;
