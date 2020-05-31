import { Movie } from '../@types/movie';

export function updateIsFavorite(movies: Movie[], favorites: Movie[]) {
  return movies.map((movie: Movie) => ({
    ...movie,
    isFavorite: isFavorite(movie, favorites),
  }));
}

function isFavorite(movie: Movie, favorites: Movie[]) {
  return !!favorites.find((favorite) => favorite.imdbID === movie.imdbID);
}
