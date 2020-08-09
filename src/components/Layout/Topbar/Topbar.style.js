import styled from 'styled-components';
import { setColor } from '../../../theme';

const TopbarContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: ${setColor.mainWhite};
  box-sizing: border-box;
  height: 10vh;
  background-color: ${setColor.secondaryBlack};
  border-bottom: 0.1px solid ${setColor.darkGray};
`;

export default TopbarContainer;
