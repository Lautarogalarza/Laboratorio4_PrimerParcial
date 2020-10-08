import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  peliculas: Observable<any[]>;
  listadoPelis=[];
  listaFiltrada=[];
  peliculaDetalle:Pelicula;
  activoModificar:boolean;
  activoEliminar:boolean;
  constructor(private context: AngularFireDatabase,private route: Router) { }

  ngOnInit(): void {
    this.peliculas = this.context.list('peliculas').valueChanges();
    this.peliculas.subscribe(peliculas => {
      this.listadoPelis = peliculas;
      this.listadoPelis=this.listadoPelis.filter(p=> p.estado ==true);
      console.log(this.listadoPelis);
    }, error => console.log(error));
    
  }

  peliculaEventDetalle(pelicula:Pelicula){
    this.peliculaDetalle=pelicula;
  }

}
