import React from 'react';
import { LoadingContainer, LoaderGIF } from './Loading.style';
import Loader from '../../assets/Loader.gif';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoaderGIF src={Loader} alt="Cargando Contenido" />
      <h5>Cargando contenido</h5>
    </LoadingContainer>
  );
};

export default Loading;
