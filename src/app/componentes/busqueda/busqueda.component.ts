import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import {Pelicula} from '../../clases/pelicula'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

 actores: Observable<any[]>;
  listadoActores = [];
  actorDetalle:Actor;
  actorModificar:Actor;
  actorEliminar:Actor;

  constructor(private context: AngularFireDatabase) {
    
  }


  
  actorEventDetalle(pelicula:Actor){
    this.actorDetalle=pelicula;
  }

  actorEventModificar(pelicula:Actor){
    this.actorModificar=pelicula;
  }

  actorEventEliminar(pelicula:Actor){
  
    this.actorEliminar=pelicula;
  }



  
  ngOnInit(): void {
 

    this.actores = this.context.list('actoresParcial').valueChanges();
    this.actores.subscribe(actores => {
      this.listadoActores = actores;
      this.listadoActores=this.listadoActores.filter(p=> p.estado ==true);
    }, error => console.log(error));

 
  }
}
