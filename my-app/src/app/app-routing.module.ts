import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';

import { HomeComponent } from './components/home/home.component';
import { DetalleTvShowComponent } from './components/detalle-tv-show/detalle-tv-show.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'Movies', component: MoviesComponent},
  { path:'TvShow', component: TvshowComponent},
  { path:'DetalleTvshow/:id', component: DetalleTvShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
