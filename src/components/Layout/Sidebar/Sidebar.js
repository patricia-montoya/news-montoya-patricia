import React from 'react';
import { Megaphone } from '@styled-icons/entypo/Megaphone';
import { Newspaper } from '@styled-icons/fa-regular/Newspaper';
import { Polis } from '@styled-icons/crypto/Polis';
import { World } from '@styled-icons/boxicons-regular/World';
import { Chip } from '@styled-icons/boxicons-regular/Chip';
import { Movie2 } from '@styled-icons/remix-fill/Movie2';
import { Trophy } from '@styled-icons/boxicons-solid/Trophy';
import { Lightbulb } from '@styled-icons/fa-solid/Lightbulb';
import { CATEGORIES } from '../../../utils/constants';
import MenuOption from '../MenuOption';
import {
  SidebarContainer,
  HeaderContainer,
  OptionsContainer,
} from './Sidebar.style';

const menuOptions = [
  {
    link: '/',
    name: CATEGORIES.HOME.name,
    icon: <Newspaper className="optionIconStyle" />,
  },
  {
    link: '/politics',
    name: CATEGORIES.POLITICS.name,
    icon: <Polis className="optionIconStyle" />,
  },
  {
    link: '/international',
    name: CATEGORIES.INTERNATIONAL.name,
    icon: <World className="optionIconStyle" />,
  },
  {
    link: '/technology',
    name: CATEGORIES.TECHNOLOGY.name,
    icon: <Chip className="optionIconStyle" />,
  },
  {
    link: '/shows',
    name: CATEGORIES.SHOWS.name,
    icon: <Movie2 className="optionIconStyle" />,
  },
  {
    link: '/sports',
    name: CATEGORIES.SPORTS.name,
    icon: <Trophy className="optionIconStyle" />,
  },
  {
    link: '/design',
    name: CATEGORIES.DESIGN.name,
    icon: <Lightbulb className="optionIconStyle" />,
  },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <HeaderContainer>
        <Megaphone className="iconStyle" />
        <h2 className="headerText">News Room</h2>
      </HeaderContainer>
      <OptionsContainer>
        {menuOptions.map((option) => (
          <MenuOption
            key={option.name}
            optionLink={option.link}
            optionIcon={option.icon}
            optionName={option.name}
          />
        ))}
      </OptionsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
