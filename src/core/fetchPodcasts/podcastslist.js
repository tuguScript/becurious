const INITIAL_STATE = { loading: true, data: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_PODCASTS_FULFILLED":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_PODCASTS_FAILED":
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
}
