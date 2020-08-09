import React from 'react';
import NewsCard from '../components/NewsCard';
import { dateFormat } from '../utils';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchLatestNews(dateFormat());
  }

  render() {
    const { data, isFetching, error } = this.props.news;

    console.log(isFetching);
    console.log(data);

    return (
      <>
        {data.data !== undefined ? (
          data.data.slice(0, 10).map((item) => <NewsCard />)
        ) : (
          <h1>Cargando News</h1>
        )}
      </>
    );
  }
}

export default Home;
