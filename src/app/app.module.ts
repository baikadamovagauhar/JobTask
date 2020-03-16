import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/core/header/header.component';
import { FooterComponent} from './components/core/footer/footer.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ChosenMoviesComponent } from './components/chosen-movies/chosen-movies.component';
import { ContentComponent} from './components/core/content/content.component';
import { FormsModule} from '@angular/forms';


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
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
