import React from 'react';
import NewsCard from '../components/NewsCard';
import Loading from '../components/Loading';
import { dateFormat } from '../utils';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchLatestNews(dateFormat());
  }

  render() {
    const { data } = this.props.news;

    return (
      <>
        {data.data !== undefined ? (
          data.data
            .slice(0, 10)
            .map((item, index) => <NewsCard key={index} data={item} />)
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default Home;
