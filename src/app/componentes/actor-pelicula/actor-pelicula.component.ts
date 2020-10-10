import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  actores: Observable<any[]>;
  listadoActores = [];
  listadoPeliculas=[];
  actorPelicula: Actor;
  actorDetalle: Actor;
  actorPais: Actor;
  pais: any;
  peliculaDetalle: Pelicula;
  activo:boolean=true;
  constructor(private context: AngularFireDatabase) { }

  ngOnInit(): void {

    this.actores = this.context.list('actoresParcial').valueChanges();
    this.actores.subscribe(actores => {
      this.listadoActores = actores;
      this.listadoActores = this.listadoActores.filter(p => p.estado == true);
    }, error => console.log(error));

  }


  actorEventPelicula(peliculas) {
    this.listadoPeliculas = peliculas;
    this.activo=false;
  }

  actorEventPais(actor: Actor) {
    this.actorPais = actor;
  }

  actorEventDetalle(actor: Actor) {
    this.actorDetalle = actor;
  }


}
