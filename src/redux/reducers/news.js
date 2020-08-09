import {
  NEWS_REQUEST,
  NEWS_BY_CATEGORY_REQUEST,
  NEWS_BY_KEYWORD_REQUEST,
  NEWS_SUCCESS,
  NEWS_ERROR,
} from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return { ...state, isFetching: true };
    case NEWS_BY_CATEGORY_REQUEST:
      return { ...state, isFetching: true };
    case NEWS_BY_KEYWORD_REQUEST:
      return { ...state, isFetching: true };
    case NEWS_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case NEWS_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
