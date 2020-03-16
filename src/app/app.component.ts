import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MoviesCatalog';
  url = '';
  constructor( private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    // this.url = this.route.root.component.toString;
    console.log(this.url);
  }
}
