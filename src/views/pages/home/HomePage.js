import React, { Component } from "react";
import PostCard from "../../components/PostCard/PostCard.jsx";
import { connect } from "react-redux";
import { fetchPosts } from "../../../core/postlists/action";
import Button from "react-md/lib/Buttons/Button";
import Paper from "react-md/lib/Papers";
import Spinner from "../../components/Spinner/Spinner.jsx";
import "./HomePage.css";
import { playerActions } from "../../../core/musicPlayer/action.js";
import { fetchPodcasts } from "../../../core/fetchPodcasts/action";

class HomePage extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  playSelectedTrack(source_url, name) {
    this.props.playSelectedTrack(source_url, name);
    this.togglePlayPause();
  }
  togglePlayPause() {
    if (this.props.musicPlayer.isPlaying) {
      this.props.audioPaused();
    } else {
      this.props.audioPlaying();
    }
  }
  render() {
    let items = this.props.postList.data.map((post, i) => {
      return <PostCard key={i} post={post} />;
    });

    let podcastItem = this.props.podcastsList.data.map((item, i) => {
      return (
        <div className="podcastItem" style={{ marginBottom: "5px" }}>
          <div className="podcastLeft">
            <img
              src="http://www.lorempixel.com/100/100"
              alt=""
              width="50"
              height="50"
            />
            <div>
              <div style={{ marginLeft: "5px" }}>
                {item.title.rendered}
              </div>
              <div style={{ marginLeft: "5px" }} className="md-caption">
                {item.date}
              </div>
            </div>
          </div>
          <Button
            icon
            style={{ marginBottom: "5px" }}
            onClick={() =>
              this.playSelectedTrack(item.source_url, item.title.rendered)}
          >
            {this.props.musicPlayer.isPlaying ? "pause" : "play_arrow"}
          </Button>
        </div>
      );
    });

    if (this.props.postList.loading) {
      return <div style={{ marginTop: 200 }}><Spinner /></div>;
    }
    return (
      <div>
        <div className="postList">
          {items}
        </div>
        <div className="rightBanner">
          <Paper className="paper">
            <div
              className="md-headline"
              style={{ paddingLeft: "20px", paddingTop: "20px" }}
            >
              Podcast
            </div>
            <hr />
            <div className="podcastList">
              {podcastItem}

            </div>
          </Paper>
          <Paper className="paper">
            <div
              className="md-headline"
              style={{ paddingLeft: "20px", paddingTop: "20px" }}
            >
              Video
            </div>
            <hr />
            <div className="podcastList">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia consequuntur reiciendis blanditiis, provident iure asperiores perspiciatis quo quis cupiditate tempora delectus voluptas est. Architecto perferendis, repudiandae nostrum eveniet vitae.
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postList: state.postList,
    musicPlayer: state.musicPlayer,
    podcastsList: state.podcastsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: dispatch(fetchPosts()),
    audioPlaying: () => dispatch(playerActions.audioPlaying()),
    audioPaused: () => dispatch(playerActions.audioPaused()),
    fetchPodcasts: dispatch(fetchPodcasts()),
    playSelectedTrack: (source_url, name) =>
      dispatch(playerActions.playSelectedTrack(source_url, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
