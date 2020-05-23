import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import ContentContainer from './Layout.styles';

const Layout = (props) => {
  console.log(props);
  return (
    <>
      <Topbar />
      <Sidebar />
      <ContentContainer>{props.children}</ContentContainer>
    </>
  );
};

export default Layout;
