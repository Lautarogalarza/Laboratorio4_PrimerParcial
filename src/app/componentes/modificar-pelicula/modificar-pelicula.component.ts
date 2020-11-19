import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {
  @Input() peliculaModificar;
  peliculas: Observable<any[]>;
  listadoPelis: Pelicula[] = [];
  fechaAux: Date = new Date;



  constructor(private context: AngularFireDatabase, private route:Router) { }

  ngOnInit(): void {
    this.peliculas = this.context.list('actoresParcial').valueChanges();
    this.peliculas.subscribe(peliculas => this.listadoPelis = peliculas, error => console.log(error));

  }


  ModificarPelicula() {

    let id = this.peliculaModificar.id.toString();

    this.context.list('actoresParcial').update(id, {
      nombre: this.peliculaModificar.nombre,
      apellido: this.peliculaModificar.apellido,
      sexo: this.peliculaModificar.sexo,
      nacionalidad: this.peliculaModificar.nacionalidad,
      estado: this.peliculaModificar.estado,
      fecha:this.peliculaModificar.fecha,
      id: this.peliculaModificar.id,
      foto: this.peliculaModificar.foto,

    }).then(() => {
      this.peliculaModificar= null;
       this.route.navigate[('/búsqueda')];
    });


  }

}
