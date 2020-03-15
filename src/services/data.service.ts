import { Injectable } from '@angular/core';
import {movies} from '../app/movie.mock-data';
import {genreType} from '../app/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
  }

  getMovies(genre): any [] {
    return movies.filter((movie) => {
      return movie.genre.indexOf(genre) !== -1;
    });
  }

  getGenre() {
    return genreType;
  }
}


