import styled from 'styled-components';
import { setColor } from '../../../theme';

const TopbarContainer = styled.header`
  color: ${setColor.mainWhite};
  box-sizing: border-box;
  height: 5vh;
  background-color: ${setColor.secondaryBlack};
  border-bottom: 0.1px solid ${setColor.darkGray};
`;

export default TopbarContainer;
