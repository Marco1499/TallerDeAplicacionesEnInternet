import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {MoviePlayingNow} from '../models/movies.model'
import { tvshowlist } from '../models/tvshow.model';
import { Configuration, Images } from '../models/configuration.model';
import {Observable}from 'rxjs'
import { Detalletvshowlist } from '../models/DetalleTvShow.model';
import { DetalleMovie } from '../models/DetalleMovie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
private API_MOVIE_NOWPLAYING="https://api.themoviedb.org/3/movie/now_playing?api_key=b0cb6f9eba58c87e0da7c25e75537fe7";
private API_CONFIGURATION="https://api.themoviedb.org/3/configuration?api_key=b0cb6f9eba58c87e0da7c25e75537fe7";
private API_TV_SHOW="https://api.themoviedb.org/3/tv/airing_today?api_key=b0cb6f9eba58c87e0da7c25e75537fe7";
private API_DETALLE_TV_SHOW="https://api.themoviedb.org/3/tv/";
private API_DETALLE_MOVIE="https://api.themoviedb.org/3/movie/";
private API_KEY="?api_key=b0cb6f9eba58c87e0da7c25e75537fe7";
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
  getTvshow():Observable<tvshowlist>
  {
    return this.http.get<tvshowlist>(this.API_TV_SHOW);
  }
  getDetalleTvShow(id:string):Observable<Detalletvshowlist>
  {
    return this.http.get<Detalletvshowlist>(this.API_DETALLE_TV_SHOW+id+this.API_KEY);
  }
  getDetalleMovie(id:string):Observable<DetalleMovie>
  {
    return this.http.get<DetalleMovie>(this.API_DETALLE_MOVIE+id+this.API_KEY);
  }
}

/*configuracion de tvshow*/

