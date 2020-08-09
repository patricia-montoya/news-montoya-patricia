import styled from 'styled-components';
import { setColor } from '../../../theme';

export const MenuOptionContainer = styled.div`
  margin-bottom: 30px;
  .navigationLink {
    color: ${setColor.mainWhite};
    font-size: 1.2em;
    font-weight: 600;
    padding: 15px;
    text-decoration: none;
  }

  .optionIconStyle {
    color: ${setColor.mainWhite};
    height: 30px;
    width: 30px;
    margin: 0px 10px;
  }
`;
