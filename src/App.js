import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import storeConfiguration from './redux/storeConfig';

import GlobalStyles from './theme/globalStyles';
import Layout from './components/Layout';

import Home from './containers/Home';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

const store = storeConfiguration();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
