import React from 'react';

import { Provider } from 'react-redux';
import storeConfiguration from './redux/storeConfig';

import GlobalStyles from './theme/globalStyles';
import Layout from './components/Layout';
import Card from './components/Card';

const store = storeConfiguration();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Card></Card>
      </Layout>
    </Provider>
  );
}

export default App;
