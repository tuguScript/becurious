const INITIAL_STATE = { loading: true, data: [], error: false };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_POSTS_FULFILLED":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_POSTS_FAILED":
      return { ...state, loading: false, data: action.payload, error: true };
    default:
      return state;
  }
}
