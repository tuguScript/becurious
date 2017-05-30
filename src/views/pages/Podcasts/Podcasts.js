import React, { Component } from "react";
import { fetchPodcasts } from "../../../core/fetchPodcasts/action";
import { connect } from "react-redux";
import PodcastCard from '../../components/PodcastCard/PodcastCard'

class Podcasts extends Component {
  state = {};
  render() {
    let postcasts = this.props.podcastsList.data.map((item, i) => {
      return <PodcastCard key={i} podcast={item}/>
    })
    return (
      <div>
        {postcasts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    podcastsList: state.podcastsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPodcasts: dispatch(fetchPodcasts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
