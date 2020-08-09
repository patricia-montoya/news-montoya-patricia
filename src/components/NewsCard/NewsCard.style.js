import styled from 'styled-components';
import { setColor } from '../../theme';

export const CardContainer = styled.div`
  width: 83vw;
  height: 20vh;
  border: 1px solid ${setColor.secondaryGray};
  border-radius: 8px;
  box-shadow: 0.5px 0.5px 5px ${setColor.secondaryGray};
  background-color: ${setColor.secondaryWhite};
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 15%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const InfoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1vh;
  margin-left: 1vw;
`;

export const Title = styled.h3`
  color: ${setColor.secondaryBlack};
  font-size: 1.5em;
  font-weight: 800;
`;

export const Date = styled.p`
  color: ${setColor.darkGray};
  font-size: 1em;
  font-weight: 600;
`;

export const Source = styled.p`
  color: ${setColor.mainBlue};
  align-self: flex-end;
  font-size: 1.2em;

  .linkToSource {
    text-decoration: none;
    color: ${setColor.mainBlue};
  }
`;
