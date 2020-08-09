import styled from 'styled-components';
import { setColor } from '../../../theme';

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  width: 13vw;
  height: 100vh;
  background-color: ${setColor.secondaryBlack};
  color: ${setColor.mainWhite};
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${setColor.secondaryGray};

  .headerText {
    margin-top: 20px;
    align-self: center;
  }

  .iconStyle {
    color: ${setColor.mainWhite};
    padding: 5px;
    height: 40px;
    margin: 0px 12px;
    background-color: ${setColor.mainBlue};
    border-radius: 20px;
  }
`;

export const OptionsContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;
