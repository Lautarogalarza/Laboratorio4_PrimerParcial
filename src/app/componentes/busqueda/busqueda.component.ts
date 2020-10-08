import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Pelicula} from '../../clases/pelicula'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  peliculas: Observable<any[]>;
  listadoPelis=[];
  peliculaDetalle:Pelicula;
  peliculaModificar:Pelicula;
  peliculaEliminar:Pelicula;

  constructor(private context: AngularFireDatabase) {
    
  }


  
  peliculaEventDetalle(pelicula:Pelicula){
    this.peliculaDetalle=pelicula;
  }

  peliculaEventModificar(pelicula:Pelicula){
    this.peliculaModificar=pelicula;
  }

  peliculEventEliminar(pelicula:Pelicula){
    this.peliculaEliminar=pelicula;
  }
  
  ngOnInit(): void {
    this.peliculas = this.context.list('peliculas').valueChanges();
    this.peliculas.subscribe(peliculas => {
      this.listadoPelis = peliculas;
      this.listadoPelis=this.listadoPelis.filter(p=> p.estado ==true);
      console.log(this.listadoPelis);
    }, error => console.log(error));
 
  }
}
