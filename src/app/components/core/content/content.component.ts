import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit, OnDestroy {

  movies: any[];
  searchText: string;

  back = {
      title: "Joker",
      description: "“Joker” is an original, standalone story. Arthur Fleck, a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale.",
      rate: "9.3",
      length: "2h 1min",
      img: "../assets/images/jk.jpg",
      genres: 'Drama, Suspense',
      director: 'Todd Phillips',
      starring: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz'
    };
  genre: any;
  genres: any = {};
  keys: any;

  private  querySubscription: Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.genre = queryParam['genre'];
        this.getMovies(this.genre);
      }
    )
  }
  ngOnInit() {
    this.getMovies(this.genre);
    this.getGenres();
  }
  ngOnDestroy(): void {
    if (this.querySubscription){
      this.querySubscription.unsubscribe();
    }
  }
  getMovies(genre){
    this.movies = this.dataService.getMovies(genre);
  }
  getGenres(){
    this.keys = Object.keys(this.dataService.getGenre());
    this.genres = this.dataService.getGenre();
  }
}
