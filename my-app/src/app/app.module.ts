import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieService } from './services/movie.service';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TopNavBarComponent,
    TvshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
