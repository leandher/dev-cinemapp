import { FavoriteState } from './favorite';
import { SearchState } from './search';

interface State {
  loading: {isLoading: boolean};
  favorites: FavoriteState;
  search: SearchState;
}