import {
  NEWS_REQUEST,
  NEWS_BY_CATEGORY_REQUEST,
  NEWS_BY_KEYWORD_REQUEST,
  NEWS_SUCCESS,
  NEWS_ERROR,
} from './actionTypes';
import {
  getLatestNews,
  getNewsByCategory,
  getNewsByKeyword,
} from '../../services';

export const newsRequest = () => ({
  type: NEWS_REQUEST,
});

export const newsByCategoryRequest = () => ({
  type: NEWS_BY_CATEGORY_REQUEST,
});

export const newsByKeywordRequest = () => ({
  type: NEWS_BY_KEYWORD_REQUEST,
});

export const newsSuccess = (news) => ({
  type: NEWS_SUCCESS,
  payload: news,
});

export const newsError = (error) => ({
  type: NEWS_ERROR,
  payload: error,
});

export const fetchLatestNews = (date) => (dispatch) => {
  dispatch(newsRequest());
  getLatestNews(date)
    .then((data) => dispatch(newsSuccess(data)))
    .catch((error) => dispatch(newsError(error)));
};

export const fetchNewsByCategory = (categoryNumber) => (dispatch) => {
  dispatch(newsByCategoryRequest());
  getNewsByCategory(categoryNumber)
    .then((data) => dispatch(newsSuccess(data)))
    .catch((error) => dispatch(newsError(error)));
};

export const fetchNewsByKeyword = (keyword) => (dispatch) => {
  dispatch(newsByKeywordRequest());
  getNewsByKeyword(keyword)
    .then((data) => dispatch(newsSuccess(data)))
    .catch((error) => dispatch(newsError(error)));
};
