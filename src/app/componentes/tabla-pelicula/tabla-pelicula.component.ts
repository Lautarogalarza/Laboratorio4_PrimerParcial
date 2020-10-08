import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Pelicula} from '../../clases/pelicula'

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listaPeliculas=[];
  @Output() emitPeliculaDetalle:EventEmitter<any> = new EventEmitter();
  @Output() emitPeliculaModificar:EventEmitter<any> = new EventEmitter();
  @Output() emitPeliculaEliminar:EventEmitter<any> = new EventEmitter();
  
  constructor() { 
    

  }

    ngOnInit(): void {
      /*let peliculas : Pelicula[] = []
      setTimeout(() => {
        this.listaPeliculas.forEach(function(data) {
        let pelicula = new Pelicula(data.id,data.nombre,data.tipo,data.fecha,data.cantPublico,data.foto);
        peliculas.push(pelicula);
        peliculas.sort((a,b)=> a.id < b.id ? -1 : a.id > b.id ? 1 : 0);  
      });
      
      }, 1000);
      
      console.log(peliculas);
      this.listaPeliculas = peliculas;*/
    }


  EnviarPeliculaDetalle(pelicula:Pelicula)
  {
    console.log(pelicula);
    this.emitPeliculaDetalle.emit(pelicula)
  }
  
  
  EnviarPeliculaModificar(pelicula:Pelicula)
  {
    console.log(pelicula);
    this.emitPeliculaModificar.emit(pelicula)
  }

  EnviarPeliculaEliminar(pelicula:Pelicula)
  {
    console.log(pelicula);
    this.emitPeliculaEliminar.emit(pelicula)
  }

}
