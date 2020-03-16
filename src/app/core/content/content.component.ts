import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [DataService]

})
export class ContentComponent implements OnInit {

  movies: any[];
  searchText: string;
  filters = [
    {name: ' Filtered by', value: 0},
    {name: ' popularity', value: 1},
    {name: ' rates', value: 2},
    {name: ' increasing duration', value: 3},
    {name: ' decreasing duration', value: 4}
  ];
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
  genre: any
  genres: any = {};
  keys: any;
  private  querySubscription: Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) =>{
        this.genre = queryParam['genre'];
        this.getMovies(this.genre);
        console.log(this.genre);
      }
    )
  }

  ngOnInit() {
    this.getMovies(this.genre);
    this.getGenres();
  }

  getMovies(genre){
    this.movies = this.dataService.getMovies(genre);
  }

  getGenres(){
    this.keys = Object.keys(this.dataService.getGenre());
    this.genres = this.dataService.getGenre();
  }
}
