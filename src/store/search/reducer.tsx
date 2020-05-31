import { SearchAction, SearchState, GET_MOVIES } from '../../@types/search.d';


const initialState: SearchState = {
  movies: [],
  totalMovies: 0,
};

export default function reducer(
  state = initialState,
  action: SearchAction
): SearchState {
  switch (action.type) {
    case GET_MOVIES:
      return {
        movies: [...state.movies, ...action.payload?.movies],
        totalMovies: action.payload?.totalMovies || 0,
        status: action.payload?.status,
      };

    default:
      return state;
  }
}
