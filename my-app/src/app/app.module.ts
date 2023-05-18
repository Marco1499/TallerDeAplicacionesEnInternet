import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieService } from './services/movie.service';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleTvShowComponent } from './components/detalle-tv-show/detalle-tv-show.component';
import { DetalleMoviesComponent } from './components/detalle-movies/detalle-movies.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TopNavBarComponent,
    TvshowComponent,
    HomeComponent,
    DetalleTvShowComponent,
    DetalleMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],

})
export class AppModule { }
