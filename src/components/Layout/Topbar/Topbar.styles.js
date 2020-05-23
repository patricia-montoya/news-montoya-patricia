import styled from 'styled-components';
import { setColor } from '../../../theme';

const TopbarContainer = styled.header`
  box-sizing: border-box;
  height: 5vh;
  background-color: ${setColor.lightBlack};
  border-bottom: 0.1px solid ${setColor.darkGray};
`;

export default TopbarContainer;
