import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Pelicula } from '../../clases/pelicula'

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listaPeliculas = [];
  @Output() emitPeliculaDetalle: EventEmitter<any> = new EventEmitter();
  @Output() emitPeliculaModificar: EventEmitter<any> = new EventEmitter();
  @Output() emitPeliculaEliminar: EventEmitter<any> = new EventEmitter();

  @Output() emitActorPelicula: EventEmitter<any> = new EventEmitter();
  @Output() emitActorPais: EventEmitter<any> = new EventEmitter();
  @Input() parte2: boolean;
  @Input() parte3: boolean;
  listaPaises = [];
  peliculas: Observable<any[]>;
  listadoPelis = [];
  constructor(private paisesService: PaisesService, private context: AngularFireDatabase) {


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


    this.peliculas = this.context.list('peliculas').valueChanges();
    this.peliculas.subscribe(peliculas => {
      this.listadoPelis = peliculas;
      this.listadoPelis = this.listadoPelis.filter(p => p.estado == true);
      console.log(this.listadoPelis);
    }, error => console.log(error));


    this.paisesService.getUsers().subscribe((listado: any) => {

      console.log('console log dentro del observable');
      this.listaPaises = listado;
    }, error => {
      console.log('Error');
    });


  }


  EnviarPeliculaDetalle(pelicula: Pelicula) {
    //console.log(pelicula);
    this.emitPeliculaDetalle.emit(pelicula)
  }


  EnviarPeliculaModificar(pelicula: Pelicula) {
    console.log(pelicula);
    this.emitPeliculaModificar.emit(pelicula)
  }

  EnviarPeliculaEliminar(pelicula: Pelicula) {
    console.log(pelicula);
    this.emitPeliculaEliminar.emit(pelicula)
  }


  EnviarActorPelicula(actor) {

    let listaFiltrada=[];

     this.listadoPelis.filter(function (p) {

      p.actor.forEach(element => {
        if (element == actor.id) {

           listaFiltrada.push(p);
        }
      })
    }


    );

    this.emitActorPelicula.emit(listaFiltrada);
  }

  EnviarActorPais(actor) {
    let paisActor = this.listaPaises.filter(p => p.name == actor.nacionalidad);
    this.emitActorPais.emit(paisActor);
  }



}
