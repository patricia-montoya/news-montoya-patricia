import React from 'react';
import { timestampToDate } from '../../utils';
import ImageNotFound from '../../assets/ImageNotFound.png';
import {
  CardContainer,
  Image,
  InfoContainer,
  Title,
  Date,
  Source,
} from './NewsCard.style';

const NewsCard = (props) => {
  const { img_url, title, url, source_name, date } = props.data;
  console.log(img_url);
  console.log(timestampToDate(date));

  return (
    <CardContainer>
      {img_url === null ? (
        <Image src={ImageNotFound} alt={title} />
      ) : (
        <Image src={img_url} alt={title} />
      )}
      <InfoContainer>
        <Title>{title}</Title>
        <Date>{timestampToDate(date)}</Date>
        <Source>
          <a href={url} className="linkToSource">
            {`Leer más en `}
            <strong>{source_name}</strong>
          </a>
        </Source>
      </InfoContainer>
    </CardContainer>
  );
};

export default NewsCard;
