import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import {Detalletvshowlist,DetalleTvshowRes} from'src/app/models/DetalleTvShow.model';

@Component({
  selector: 'app-detalle-tv-show',
  templateUrl: './detalle-tv-show.component.html',
  styleUrls: ['./detalle-tv-show.component.css']
})
export class DetalleTvShowComponent implements OnInit{
Detalletv:Detalletvshowlist;
Detallerespuet:Array<DetalleTvshowRes>

constructor(private DetalleServicio:MovieService)
{
  this.Detalletv=new Detalletvshowlist;
  this.Detallerespuet=new Array<DetalleTvshowRes>;

}
ngOnInit():void
    {
      this.gettvDetalleShowlist();
    }
  gettvDetalleShowlist()
    {
      this.DetalleServicio.getDetalleTvShow().subscribe
    ((DetalleLRespuestTv:Detalletvshowlist)=>{
      this.Detallerespuet=DetalleLRespuestTv.results;
      console.log(this.Detallerespuet);
    }, error=>console.error(error)
    );
    }

}
