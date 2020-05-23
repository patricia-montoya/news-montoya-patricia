import React from 'react';
import GlobalStyles from './theme/globalStyles';
import Layout from './components/Layout';
import Card from './components/Card';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Card></Card>
      </Layout>
    </>
  );
}

export default App;
