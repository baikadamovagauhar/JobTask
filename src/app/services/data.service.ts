import { Injectable } from '@angular/core';
import {movies} from '../movie.mock-data';
import {genreType} from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
  }

  getMovies(genre): any [] {
    if (genre){
      return movies.filter((movie)=>{
        if (movie.genres.includes(genre)){
          return movie;
        };
        });
    }
    else {
      return movies;
    }

  }

  getGenre() {
    return genreType;
  }

  getSpecificMovie(id) {
    return movies.filter((movie)=>{
      if (movie.id==id){
        return movie;
      }
    })
  }
}


