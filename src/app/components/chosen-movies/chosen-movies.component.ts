import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chosen-movies',
  templateUrl: './chosen-movies.component.html',
  styleUrls: ['./chosen-movies.component.scss'],
  providers: [DataService]
})
export class ChosenMoviesComponent implements OnInit {
  movies: any;
  id : any;
  similarMovie: any;
  constructor(private dataService: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      this.id = params.id;
      this.getMovie(this.id);
      this.similarMovie = this.dataService.getMovies(this.movies[0].genres[0]);
      console.log(this.similarMovie);

    });
  }
  getMovie(id){
    this.movies = this.dataService.getSpecificMovie(id);
    console.log(this.movies);
  }

}
