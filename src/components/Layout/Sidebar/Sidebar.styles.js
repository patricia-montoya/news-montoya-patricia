import styled from 'styled-components';
import { setColor } from '../../../theme';

const SidebarContainer = styled.aside`
  position: fixed;
  top: 9.9vh;
  width: 13vw;
  height: 100vh;
  background-color: ${setColor.secondaryBlack};
  color: ${setColor.mainWhite};
`;

export default SidebarContainer;
