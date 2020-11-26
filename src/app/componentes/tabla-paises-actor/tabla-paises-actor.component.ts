import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises-actor',
  templateUrl: './tabla-paises-actor.component.html',
  styleUrls: ['./tabla-paises-actor.component.css']
})
export class TablaPaisesActorComponent implements OnInit {
  @Input() listaPeliculas = [];


  @Output() emitPaisDetalle: EventEmitter<any> = new EventEmitter();
  @Output() emitPaisActor: EventEmitter<any> = new EventEmitter();
  @Output() emitPaisPelicula: EventEmitter<any> = new EventEmitter();

  listaPaises = [];
  actores: Observable<any[]>;
  listadoActores = [];
  listadoPeliculas =[];
  peliculas: Observable<any[]>;
  constructor(private paisesService: PaisesService, private context: AngularFireDatabase) {


  }

  ngOnInit(): void {

    this.actores = this.context.list('actoresParcial').valueChanges();
    this.actores.subscribe(actores => {
      this.listadoActores = actores;
      this.listadoActores = this.listadoActores.filter(p => p.estado == true);
      console.log(this.listadoActores);
    }, error => console.log(error));


    this.peliculas = this.context.list('peliculas').valueChanges();
    this.peliculas.subscribe(peliculas => {
      this.listadoPeliculas = peliculas;
      this.listadoPeliculas = this.listadoPeliculas.filter(p => p.estado == true);
      console.log(this.listadoPeliculas);
    }, error => console.log(error));


    this.paisesService.getUsers().subscribe((listado: any) => {

      console.log('console log dentro del observable');
      this.listaPaises = listado;
    }, error => {
      console.log('Error');
    });


  }


  
  EnviarPeliculaPais(pais) {

    let listaFiltrada = [];

    this.listadoPeliculas.forEach(p => {

      setTimeout(() => {

          if (p.pais == pais.name) {
            listaFiltrada.push(p);
          }

      }, 100);

    });
    console.log(listaFiltrada);
    this.emitPaisPelicula.emit(listaFiltrada);
  }



  EnviarActorPais(pais) {

    let listaFiltrada = [];

    this.listadoActores.forEach(p => {

      setTimeout(() => {

          if (p.nacionalidad == pais.name) {
            listaFiltrada.push(p);
          }

      }, 100);

    });
    console.log(listaFiltrada);
    this.emitPaisActor.emit(listaFiltrada);
  }

  EnviarPaisDetalle(pais) {
    let paisActor = this.listaPaises.filter(p => p.name == pais.name);
    this.emitPaisDetalle.emit(paisActor);
  }

}
