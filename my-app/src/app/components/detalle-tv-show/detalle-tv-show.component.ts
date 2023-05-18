import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import {Detalletvshowlist} from'src/app/models/DetalleTvShow.model';
import { Configuration,Images } from 'src/app/models/configuration.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-tv-show',
  templateUrl: './detalle-tv-show.component.html',
  styleUrls: ['./detalle-tv-show.component.css']
})
export class DetalleTvShowComponent implements OnInit{
Detalletv:Detalletvshowlist;
course:string;
ConfigurationRes:Configuration;
OImages:Images=new Images;

constructor(
              private DetalleServicio:MovieService,
              private route: ActivatedRoute
            )
{
  this.Detalletv=new Detalletvshowlist;
  this.course='';
  this.ConfigurationRes=new Configuration;
  this.OImages=new Images;

}
ngOnInit():void
    {
      this.GetConfigutration(),
      this.route.params.subscribe(params => {
        this.course = params['id'];
        console.log(this.course);
    });
    this.gettvDetalleShowlist(this.course);
    }
  gettvDetalleShowlist(id:string)
    {
      this.DetalleServicio.getDetalleTvShow(id).subscribe
    ((DetalleLRespuestTv:Detalletvshowlist)=>{
      this.Detalletv=DetalleLRespuestTv;
      console.log(this.Detalletv);
    }, error=>console.error(error)
    );
    }

    GetConfigutration()
    {
      this.DetalleServicio.getConfiguration().subscribe
      (
        objImages=>{this.OImages=objImages.images;
          console.log(this.OImages)
        },error=>console.error(error)
      );
    }
}
