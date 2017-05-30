import React, { Component } from "react";
import FontIcon from "react-md/lib/FontIcons";
import "./PodcastCard.css";
import { connect } from "react-redux";
import { playerActions } from "../../../core/musicPlayer/action";

class PodcastCard extends Component {
  state = {};
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
    return (
      <div style={{ paddingTop: "5px" }}>
        <div className="podcastCard">
          <div className="podcastCardMedia">
            <FontIcon
              className="podcastCardMediaIcon"
              onClick={() =>
                this.playSelectedTrack(
                  this.props.podcast.source_url,
                  this.props.podcast.title.rendered
                )}
            >
              {this.props.musicPlayer.isPlaying ? "pause" : "play_arrow"}
            </FontIcon>
          </div>
          <div className="podcastCardDesc">
            <div className="md-headline">
              {this.props.podcast.title.rendered}
            </div>
            <div className="md-caption">{this.props.podcast.date}</div>
            <div className="md-body-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.podcast.caption.rendered
                }}
              />
            </div>
            <div className="md-caption">more detail</div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    musicPlayer: state.musicPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    audioPaused: () => dispatch(playerActions.audioPaused()),
    audioPlaying: () => dispatch(playerActions.audioPlaying()),
    // audioTimeUpdated: times => dispatch(playerActions.audioTimeUpdated(times)),
    // audioEnded: () => dispatch(playerActions.audioEnded()),
    audioReady: () => dispatch(playerActions.audioReady()),
    playSelectedTrack: (src, name) =>
      dispatch(playerActions.playSelectedTrack(src, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastCard);
