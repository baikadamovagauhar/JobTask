import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ChosenMoviesComponent} from './components/chosen-movies/chosen-movies.component';
import {NoFoundComponent} from './components/no-found/no-found.component';
import {BrowserModule} from '@angular/platform-browser';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main' , component: MainPageComponent },
  { path: 'catalog' , component: ChosenMoviesComponent },
  { path: 'no-found-page', component: NoFoundComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
