import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchLatestNews } from '../redux/actions/news';
import Home from '../pages/Home';

const mapStateToProps = ({ news }) => ({
  news,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchLatestNews,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
