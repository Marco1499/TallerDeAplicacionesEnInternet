import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import  {tvshowlist,TvshowRes} from 'src/app/models/tvshow.model';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  Listatv:tvshowlist;
  respuestv:Array<TvshowRes>;
  constructor(private tvservisio:MovieService){
    this.Listatv=new tvshowlist;
    this.respuestv=new Array<TvshowRes>;
    }
    ngOnInit():void
    {
      this.gettvShowlist();
    }
    gettvShowlist()
    {
      this.tvservisio.getTvshow().subscribe
    ((ListaRespuestTv:tvshowlist)=>{
      this.respuestv=ListaRespuestTv.results;
      console.log(this.respuestv);
    }, error=>console.error(error)
    );
    }

}
