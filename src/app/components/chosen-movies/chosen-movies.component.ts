import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chosen-movies',
  templateUrl: './chosen-movies.component.html',
  styleUrls: ['./chosen-movies.component.scss']
})
export class ChosenMoviesComponent implements OnInit,OnDestroy {
  movies: any;
  id : any;
  similarMovie: any;
  private  querySubscription: Subscription;

  constructor(private dataService: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.querySubscription = this.route.queryParams.subscribe(
      (params) => {
      this.id = params.id;
      this.getMovie(this.id);
      this.similarMovie = this.dataService.getMovies(this.movies[0].genres[0]);
    });
  }
  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
  getMovie(id){
    this.movies = this.dataService.getSpecificMovie(id);
  }


}
