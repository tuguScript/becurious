import axios from "axios";
import { API_BASE_URL } from "../constants";

export const fetchPodcasts = () => {
  return axios({
    method: "GET",
    url: `${API_BASE_URL}/wp-json/wp/v2/media?mime_type=audio/mpeg`
  })
    .then(res => {
      return {
        type: "FETCH_PODCASTS_FULFILLED",
        payload: res.data
      };
    })
    .catch(res => {
      return {
        type: "FETCH_PODCASTS_FAILED",
        payload: res
      };
    });
};
