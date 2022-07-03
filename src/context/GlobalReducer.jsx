// reducer function
export default function GlobalReducer(state, action) {
    switch (action.type) {
      case 'ADD_MOVIE_TO_WATCHLIST':
        return {
          ...state,
          watchlist: [...state.watchlist, action.payload],
        };
      default:
        return state;
    }
  }