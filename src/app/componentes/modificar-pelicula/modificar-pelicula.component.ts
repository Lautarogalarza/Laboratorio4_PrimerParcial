import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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



  constructor(private context: AngularFireDatabase) { }

  ngOnInit(): void {
    this.peliculas = this.context.list('actoresParcial').valueChanges();
    this.peliculas.subscribe(peliculas => this.listadoPelis = peliculas, error => console.log(error));

  }


  getFecha(): string {
    let fecha = new Date(this.fechaAux);
    let d, m, y;
    d = fecha.getDate() + 1;
    m = fecha.getUTCMonth() + 1;
    y = fecha.getFullYear();
    return d + "-" + m + "-" + y;
  }




  ModificarPelicula() {

    let id = this.peliculaModificar.id.toString();

    this.context.list('actoresParcial').update(id, {
      nombre: this.peliculaModificar.nombre,
      apellido: this.peliculaModificar.apellido,
      sexo: this.peliculaModificar.sexo,
      nacionalidad: this.peliculaModificar.nacionalidad,
      estado: this.peliculaModificar.estado,
      fecha: this.peliculaModificar.fecha,
      id: this.peliculaModificar.id,
      foto: this.peliculaModificar.foto,

    }).then(() => {

    });


  }

}
