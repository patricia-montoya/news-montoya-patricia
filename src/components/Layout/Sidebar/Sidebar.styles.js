import styled from 'styled-components';
import { setColor } from '../../../theme';

const SidebarContainer = styled.aside`
  position: fixed;
  width: 250px;
  height: 100vh;
  background-color: ${setColor.secondaryBlack};
  color: ${setColor.mainWhite};
`;

export default SidebarContainer;
