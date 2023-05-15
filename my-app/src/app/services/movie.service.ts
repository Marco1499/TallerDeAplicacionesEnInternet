import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {MoviePlayingNow} from '../models/movies.model'
import {Observable}from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
private API_SERVER="https://api.themoviedb.org/3/movie/now_playing?api_key=b0cb6f9eba58c87e0da7c25e75537fe7"
  constructor(private http:HttpClient) { }
 /* getMovie():Observable<any>*/
 getMovie():Observable<any>
  {
    return this.http.get<MoviePlayingNow>(this.API_SERVER);
  }
}
