import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../servicios/paises.service'

@Component({
  selector: 'app-paises-actor',
  templateUrl: './paises-actor.component.html',
  styleUrls: ['./paises-actor.component.css']
})
export class PaisesActorComponent implements OnInit {
  listadoPaises=[];
  listadoActores = [];
  listadoPeliculas=[];
  pais;
  activo:boolean=true;
  activoPelicula:boolean=true;

  constructor(private paisService:PaisesService) { }

  ngOnInit(): void {
    this.paisService.getUsers().subscribe((listado: any) => {
  
      console.log('console log dentro del observable');
      this.listadoPaises = listado;
    }, error => {
      console.log('Error');
    });
  }


  PaisEventActor(actores) {
    this.listadoActores = actores;
    this.activo=false;
    this.activoPelicula=true;
  }

  PaisEventPelicula(peliculas) {
    this.listadoPeliculas = peliculas;
    this.activoPelicula=false;
    this.activo=true;
  }

  PaisEventDetalle(pais) {
    this.pais = pais;
  }



}
