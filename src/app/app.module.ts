import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ChosenMoviesComponent } from './components/chosen-movies/chosen-movies.component';
import { ContentComponent } from './core/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoFoundComponent,
    MainPageComponent,
    ChosenMoviesComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
