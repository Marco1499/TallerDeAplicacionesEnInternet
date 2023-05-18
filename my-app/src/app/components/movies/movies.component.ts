import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import {MoviePlayingNow, MovieRes} from 'src/app/models/movies.model';
import { Configuration, Images } from 'src/app/models/configuration.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    MoviesResult:MoviePlayingNow;
    ConfigurationRes:Configuration;
     OMovies: Array<MovieRes> =new Array<MovieRes>;
   
    OImages:Images=new Images;
    constructor(private movieServicio:MovieService, private router:Router)
    {
      this.MoviesResult=new MoviePlayingNow;
      this.OMovies=new Array<MovieRes>;
      this.ConfigurationRes=new Configuration;
      this.OImages=new Images;
    }
  ngOnInit(): void 
  {
    this.GetConfigutration();
    this.GetPlayingNowMovies();
  }

   GetPlayingNowMovies()
  {
    
   this.movieServicio.getMovie().subscribe
    ((MovieNowPlayingFromApi:MoviePlayingNow)=>{
      this.OMovies=MovieNowPlayingFromApi.results;
      console.log(this.OMovies);
    }, error=>console.error(error)
    );
   
  }

  GetConfigutration()
  {
    this.movieServicio.getConfiguration().subscribe
    (
      objImages=>{this.OImages=objImages.images;
        console.log(this.OImages)
      },error=>console.error(error)
    );
  }
  clicVerMas(id:string)
  {
    this.router.navigate(['DetalleMovie/',id]);
   
  }
}
