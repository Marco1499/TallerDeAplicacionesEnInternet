import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {MoviePlayingNow} from '../models/movies.model'
import { Configuration, Images } from '../models/configuration.model';
import {Observable}from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
private API_MOVIE_NOWPLAYING="https://api.themoviedb.org/3/movie/now_playing?api_key=b0cb6f9eba58c87e0da7c25e75537fe7";
private API_CONFIGURATION="https://api.themoviedb.org/3/configuration?api_key=b0cb6f9eba58c87e0da7c25e75537fe7";
/*private API_MOVIE_NOWPLAYING="https://api.themoviedb.org/3/movie/now_playing?api_key=b0cb6f9eba58c87e0da7c25e75537fe7";
private API_MOVIE_NOWPLAYING="https://api.themoviedb.org/3/movie/now_playing?api_key=b0cb6f9eba58c87e0da7c25e75537fe7";*/
  constructor(private http:HttpClient) { }
 /* getMovie():Observable<any>*/
 getMovie():Observable<MoviePlayingNow>
  {
    return this.http.get<MoviePlayingNow>(this.API_MOVIE_NOWPLAYING);
   
  }
   getConfiguration():Observable<Configuration>
  {
    return this.http.get<Configuration>(this.API_CONFIGURATION);
  }
}
