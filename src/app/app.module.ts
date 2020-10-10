import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { ModificarPeliculaComponent } from './componentes/modificar-pelicula/modificar-pelicula.component';
import { EliminarPeliculaComponent } from './componentes/eliminar-pelicula/eliminar-pelicula.component';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { DetallePeliculaActorComponent } from './componentes/detalle-pelicula-actor/detalle-pelicula-actor.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    ModificarPeliculaComponent,
    EliminarPeliculaComponent,
    CabeceraComponent,
    TablaActorComponent,
    TablaPaisesComponent,
    PaisesListadoComponent,
    ActorPeliculaComponent,
    DetallePaisComponent,
    DetallePeliculaActorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
