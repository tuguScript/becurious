import { combineReducers } from "redux";
import postList from './postlists/postlists';
import podcastsList from './fetchPodcasts/podcastslist';
import musicPlayer from './musicPlayer/reducer'

const allReducers = combineReducers({
  postList: postList,
  podcastsList: podcastsList,
  musicPlayer: musicPlayer
});

export default allReducers;
