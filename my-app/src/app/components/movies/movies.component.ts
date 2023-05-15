import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import {MoviePlayingNow, MovieRes} from 'src/app/models/movies.model'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    MoviesResult:MoviePlayingNow;
    OMovies: MovieRes []=[];
    constructor(private movieServicio:MovieService)
    {
      this.MoviesResult=new MoviePlayingNow;
    }
ngOnInit(): void {
  this.movieServicio.getMovie().subscribe
    (
      omovie=>{this.OMovies=omovie.results;
      console.log(this.OMovies);}
    );
}
  PlayingNowMovies()
  {
    this.movieServicio.getMovie().subscribe
    (
      omovie=>{this.OMovies=omovie.results;
      console.log(this.OMovies);}
    );
  }
}
