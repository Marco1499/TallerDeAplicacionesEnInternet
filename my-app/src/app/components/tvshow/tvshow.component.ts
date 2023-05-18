import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import  {tvshowlist,TvshowRes} from 'src/app/models/tvshow.model';
import { Configuration, Images } from 'src/app/models/configuration.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  Listatv:tvshowlist;
  respuestv:Array<TvshowRes>;
  ConfigurationRes:Configuration;
  OImages:Images=new Images;

  constructor(private tvservisio:MovieService, private router:Router){
    this.Listatv=new tvshowlist;
    this.respuestv=new Array<TvshowRes>;
    this.ConfigurationRes=new Configuration;
    this.OImages=new Images;
    }
    ngOnInit():void
    {
      this.GetConfigutration();
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

    GetConfigutration()
    {
      this.tvservisio.getConfiguration().subscribe
      (
        objImages=>{this.OImages=objImages.images;
          console.log(this.OImages)
        },error=>console.error(error)
      );
    }
    clicVerMas(id:string)
    {
      this.router.navigate(['DetalleTvshow/',id]);
     
    }
}
