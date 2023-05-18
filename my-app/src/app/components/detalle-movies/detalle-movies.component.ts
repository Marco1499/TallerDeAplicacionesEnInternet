import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import {DetalleMovie} from'src/app/models/DetalleMovie.model';
import { Configuration,Images } from 'src/app/models/configuration.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-movies',
  templateUrl: './detalle-movies.component.html',
  styleUrls: ['./detalle-movies.component.css']
})
export class DetalleMoviesComponent implements OnInit {
DetalleMov:DetalleMovie;
course:string;
ConfigurationRes:Configuration;
OImages:Images=new Images;

constructor(
              private DetalleServicio:MovieService,
              private route: ActivatedRoute
            )
{
  this.DetalleMov=new DetalleMovie;
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
    this.getMovieDetalle(this.course);
}



    getMovieDetalle(id:string)
    {
      this.DetalleServicio.getDetalleMovie(id).subscribe
    ((DetalleMovie:DetalleMovie)=>{
      this.DetalleMov=DetalleMovie;
      console.log(this.DetalleMov);
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
