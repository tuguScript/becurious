import axios from 'axios';
import { API_BASE_URL } from '../constants';

export const fetchPosts = () => {
  return axios({
    method: "GET",
    url: `${API_BASE_URL}/wp-json/wp/v2/posts?_embed`
  })
    .then(res => {
      return {
        type: "FETCH_POSTS_FULFILLED",
        payload: res.data
      };
    })
    .catch(res => {
      return {
        type: "FETCH_POSTS_FAILED",
        payload: res
      };
    });
};
