import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
import {ActorPeliculaComponent} from './componentes/actor-pelicula/actor-pelicula.component'
import { PaisesActorComponent} from './componentes/paises-actor/paises-actor.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'búsqueda',
    pathMatch: 'full'
  },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'búsqueda', component: BusquedaComponent },
  { path: 'peliculas/alta', component: PeliculaAltaComponent },
  { path: 'peliculas/listado', component: PeliculaListadoComponent },
  { path: 'paises/tabla', component: TablaPaisesComponent },
  { path: 'paises/listado', component: PaisesListadoComponent },
  { path: 'actor/actorpelicula', component: ActorPeliculaComponent },
  { path: 'paises/busquedaPaisesActor', component: PaisesActorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
