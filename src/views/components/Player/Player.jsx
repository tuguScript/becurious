import React, { Component } from "react";
import Button from "react-md/lib/Buttons/Button";
import "./Player.css";
import { connect } from "react-redux";
import { playerActions } from "../../../core/musicPlayer/action.js";

class Player extends Component {
  state = {
    currentTime: "00:00",
    duration: "00:00"
  };
  componentDidMount() {
    console.log(this.props);
    const audio = this.refs.player;
    audio.addEventListener("canplay", this.props.audioReady);
    audio.addEventListener("ended", this.props.audioEnded);
    audio.addEventListener("pause", this.props.audioPaused);
    audio.addEventListener("playing", this.props.audioPlaying);
    audio.addEventListener("timeupdate", this.audioUpdate.bind(this));
    // audio.addEventListener("volumechange");
  }
  audioReady() {}
  audioUpdate() {
    const audio = this.refs.player;
    this.setState({ currentTime: audio.currentTime, duration: audio.duration });
  }
  togglePlayPause() {
    if (this.props.musicPlayer.isPlaying) {
      this.props.audioPaused();
    } else {
      this.props.audioPlaying();
    }
  }
  formatSecondsAsTime(secs, format) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - hr * 3600) / 60);
    var sec = Math.floor(secs - hr * 3600 - min * 60);

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    return min + ":" + sec;
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.audioPause();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.src !== this.props.src) {
      this.audioLoad();
      this.props.audioPlaying();
    }
  }
  render() {
    const styles = {
      player: {
        display: this.props.hide ? "none" : "block"
      }
    };
    if (this.props.musicPlayer.canPlay) {
      if (this.props.musicPlayer.isPlaying) {
        this.refs.player.play();
      } else {
        this.refs.player.pause();
      }
    }
    return (
      <div className="player" style={styles.player}>
        <div className="playerInside">
          <div className="playerLeftButtons">
            {/*<Button icon>
              skip_previous
            </Button>*/}
            <Button icon onClick={() => this.togglePlayPause()}>
              {this.props.musicPlayer.isPlaying ? "pause" : "play_arrow"}
            </Button>
            {/*<Button icon>
              skip_next
            </Button>*/}
          </div>
          <div style={{ paddingTop: "15px", marginLeft: "15px" }}>
            {!isNaN(this.state.currentTime)
              ? this.formatSecondsAsTime(this.state.currentTime)
              : this.state.currentTime}
            /
            {!isNaN(this.state.duration)
              ? this.formatSecondsAsTime(this.state.duration)
              : this.state.duration}
          </div>
          <div style={{ paddingTop: "15px", marginLeft: "15px" }}>
            {this.props.musicPlayer.name}
          </div>
        </div>
        <audio
          ref="player"
          src={this.props.musicPlayer.src}
        />
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
    audioTimeUpdated: times => dispatch(playerActions.audioTimeUpdated(times)),
    audioEnded: () => dispatch(playerActions.audioEnded()),
    audioReady: () => dispatch(playerActions.audioReady())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
