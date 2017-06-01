import { playerActions } from "./action";

const INITIAL_STATE = {
  isPlaying: false,
  volume: 1,
  canPlay: false,
  src: '',
  name: null
};

export default function (state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case playerActions.AUDIO_ENDED:
    case playerActions.AUDIO_PAUSED:
      return { ...state, isPlaying: false };

    case playerActions.AUDIO_PLAYING:
      return { ...state, isPlaying: true };

    case playerActions.AUDIO_VOLUME_CHANGED:
      return state.set("volume", payload.volume);

    case playerActions.PLAY_SELECTED_TRACK:
      return {...state, src: payload.src, name: payload.name};

    case playerActions.AUDIO_READY:
      return {...state, canPlay: true, src: payload}

    default:
      return state;
  }
}
